import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../contexts/UserContext";
import { GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";

import Head from "next/head";

const LoginForm = () => {
  const { providerLogin } = useContext(AuthContext);
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState(null); // State variable to hold the error message
  const router = useRouter();
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        router.push("/");
      })
      .catch((error) => console.error(error));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await signIn(email, password);
      const user = result.user;
      console.log("User logged in:", user);
      form.reset();
      router.push("/");
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid email or password. Please try again."); // Set the error message
    }
  };
  return (
    <div className="hero">
      <Head>
        <title>Login</title>
      </Head>
      <div className="hero-content text-black bg-red-100 flex-col my-5 md:my-10 lg:my-20">
        <div className="card flex-shrink-0 w-full max-w-md mx-auto shadow-2xl bg-white">
          <form onSubmit={handleLogin} className="card-body p-6">
            <h1 className="text-center font-bold text-2xl mb-4">Login</h1>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full"
              />
              <label className="label">
                <p className="text-sm py-2">
                  New in our site?
                  <Link
                    href={"/RegistrationForm"}
                    className="label-text-alt link link-hover text-sm text-blue-500 font-bold"
                  >
                    Create Account
                  </Link>
                </p>
              </label>
            </div>

            <div className="form-control mt-6">
              {error && <div className="text-red-500">{error}</div>}{" "}
              {/* Display error message */}
              <button
                className="bg-red-200 mt-5 w-full"
                type="submit"
                value="Sign In"
              >
                Sign In
              </button>
              <div className="flex justify-center py-3">
                <button onClick={handleGoogleSignIn}>
                  <img
                    className="w-[2.5rem]"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlO-Sryy8KGEGSjbmE4VTP3GLfOv3EDHYyrwrD_bMBw&s"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
