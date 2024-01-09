import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/UserContext";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

const RegistrationForm = () => {
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext);
  const router = useRouter();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password.length < 6) {
      setError("Password must be 6 characters long");
      return;
    }

    if (password !== confirm) {
      setError("Password did not match");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        router.push("/LoginForm");
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to sign up. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black flex items-center justify-center">
      <Head>
        <title>Registration</title>
      </Head>
      <div className="max-w-md w-full bg-white space-y-8">
        <div className="bg-base-100 p-8 rounded shadow-md">
          <form onSubmit={handleSignUp}>
            <h1 className="text-2xl font-bold text-center mb-4 text-[#1F2761]">
              Registration
            </h1>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#1F2761]"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#1F2761]"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="confirm"
                className="block text-sm font-medium text-[#1F2761]"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm"
                id="confirm"
                placeholder="Confirm Password"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <p className="text-sm">
              Already have an account?{" "}
              <Link href="/LoginForm" className="text-blue-500 font-bold">
                Please Login
              </Link>
            </p>

            <Link href="/policy">
              <span className="py-2 text-blue-500 inline-block">
                Privacy & Policy
              </span>
            </Link>

            <p className="text-red-400">{error}</p>

            <div className="mt-6">
              <button
                className="bg-[#1F2761] hover:bg-red-300 py-2 px-4 w-full rounded-md text-white"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
