"use client";

import { signIn } from "next-auth/react";

const GoogleButton = () => {
  return (
    <div className="grid place-items-center h-screen">
      <button
        className="px-6 py-2 mb-3 rounded-lg font-semibold cursor-pointer border-2 border-gray-300 text-white bg-black"
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      >
        Google
      </button>
    </div>
  );
};

export default GoogleButton;
