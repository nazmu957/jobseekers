
import { AuthContext } from "@/contexts/UserContext";
import Link from "next/link";
import { useContext } from "react";


const Topbar = () => {
  const { user, logOut } = useContext(AuthContext);
    return (
      <div className="border">
        <div className="bg-red h-7"></div>
        <nav class="bg-[#1E2761] text-white p-4">
          <div class="container mx-auto flex justify-between items-center">
            <a href="#" class=" text-2xl font-serif font-semibold">
              JobSeekers
            </a>

            <div class="space-x-4 font-serif">
              <Link href="/">Home</Link>
              <Link href="/profile">Profile</Link>
              <Link href="/">Jobs</Link>
              <Link href="/">Others</Link>
              <Link href="/dashboard">Dashboard</Link>

              <>
                {user?.uid ? (
                  <button
                    className="text-red-500 font-semibold"
                    onClick={logOut}
                  >
                    Logout
                  </button>
                ) : (
                  <Link className="text-white font-semibold" href="/LoginForm">
                    Login
                  </Link>
                )}
              </>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Topbar;