import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../contexts/UserContext";
import { GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import Head from "next/head";

const LoginForm = () => {
  const { providerLogin, signIn } = useContext(AuthContext);
  const [error, setError] = useState(null);
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
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Login</title>
      </Head>
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white p-8 rounded shadow-md">
          <h1 className="text-2xl font-bold text-center mb-4">Login</h1>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Your email"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your password"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-[#164080] hover:bg-gray-800 py-2 px-4 w-full rounded-md text-white"
                type="submit"
              >
                Sign In
              </button>
            </div>

            {error && <div className="text-red-500 mt-4">{error}</div>}

            <div className="flex justify-center mt-6">
              <button
                className="bg-[#164080] hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md"
                onClick={handleGoogleSignIn}
              >
                Sign In with Google
              </button>
            </div>
          </form>

          <p className="text-center text-sm mt-4">
            New in our site?{" "}
            <Link href="/RegistrationForm" className="text-blue-500 font-bold">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
