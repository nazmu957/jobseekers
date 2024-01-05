import { AuthContext } from "@/contexts/UserContext";
import { Button } from "antd";
import Link from "next/link";
import { useContext } from "react";

const Topbar = () => {
  const { user, logOut } = useContext(AuthContext);
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
            <Link href="/">Jobs</Link>
            <Link href="/">Others</Link>
            <Link href="/dashboard">Dashboard</Link>
            <>
              {user?.uid ? (
                <button onClick={logOut}>logout</button>
              ) : (
                <Link href="/LoginForm">Login</Link>
              )}
            </>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
