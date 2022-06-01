import axios from "axios";
import React, { useState } from "react";

const BoxRegister: React.FC<any> = (): JSX.Element | any => {
  const [password, setPassword] = useState("");
  const [repeatPassword, setrepeatPassword] = useState("");

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    const usernameValue = e.target.elements.username?.value;
    const passwordValue = e.target.elements.password?.value;
    const emailValue = e.target.elements.email?.value;

    if (usernameValue && passwordValue) {
      axios
        .post("/api/auth/register", {
          username: usernameValue,
          password: passwordValue,
          email: emailValue,
        })
        .then(() => {
          console.log("jea");
        })
        .catch(() => {
          console.log("niema");
        });
    }
  };

  return (
    <div className="w-96 items-center justify-center bg-gray-100">
      <div className="px-8 w-full py-6 mx-4 mt-4 text-left bg-white shadow-lg">
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-center">Join us</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="Name">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                id="username"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                id="email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={(e) => setPassword(e?.target?.value)}
              />
            </div>
            <div className="mt-4">
              <label className="block">Confirm Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={(e) => setrepeatPassword(e?.target?.value)}
              />
            </div>
            {password !== repeatPassword && (
              <span className="text-xs text-red-400">
                Password must be same!
              </span>
            )}
            <div className="flex">
              <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Create Account
              </button>
            </div>
            <div className="mt-6 text-grey-dark">
              Already have an account?
              <a className="text-blue-600 hover:underline" href="/login">
                Log in
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BoxRegister;
