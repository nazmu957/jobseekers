import React, { useContext, useState } from "react";

import { AuthContext } from "../contexts/UserContext";
import Link from "next/link";
import { useRouter } from "next/router";

import Head from "next/head";

const RegistrationForm = () => {
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext);
  const router = useRouter();

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

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
    <div className="hero bg-white text-black">
      <Head>
        <title>Registration</title>
      </Head>
      <div className="hero-content flex-col my-5 md:my-10 lg:my-20">
        <div className="card flex-shrink-0 w-full max-w-md mx-auto shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body p-6">
            <h1 className="text-center font-bold text-2xl mb-4">
              Registration
            </h1>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input text-black input-bordered w-full"
                required
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
                className="input text-black input-bordered w-full"
                required
              />
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirm"
                placeholder="Confirm Password"
                className="input input-bordered w-full"
                required
              />
              <label className="label">
                <p className="text-sm">
                  Already have an account?
                  <Link
                    href={"/LoginForm"}
                    className="label-text-alt link link-hover text-sm text-blue-500 font-bold"
                  >
                    Please Login
                  </Link>
                </p>
              </label>
              <Link href={"/policy"}>
                <span className="py-2 text-blue-500 inline-block">
                  Privacy & Policy
                </span>
              </Link>
            </div>
            <p className="text-center text-red-400">{error}</p>
            <div className="form-control mt-6">
              <button
                className="bg-red-200 w-full"
                type="submit"
                value="Sign Up"
              >Sign UP</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;

