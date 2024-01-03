
// import { AuthContext } from "@/contexts/UserContext";
import { Button } from "antd";
import Link from "next/link";
import { useContext } from "react";


const Topbar = () => {
  // const { user, logOut } = useContext(AuthContext);
    return (
      <div className="border">
        <nav class="bg-white text-black p-4">
          <div class="container mx-auto flex justify-between items-center">
            <a href="#" class=" text-lg font-bold">
              JobSeekers
            </a>

            <div class="space-x-4">
              <Link href="/">Home</Link>
              <Link href="/profile">Profile</Link>
              <a href="#">Jobs</a>
              <a href="#">Others</a>
              <Link href="/dashboard">Dashboard</Link>
              {/* {user?.uid ? (
                <items>
                  <Button onClick={logOut} type="primary" danger>
                    Logout
                  </Button>
                </items>
              ) : (
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  href="/LoginForm"
                >
                  <p className="text-black">Login</p>
                </Link>
              )} */}
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Topbar;