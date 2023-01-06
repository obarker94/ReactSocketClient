import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export const AuthButton = () => {
  const sessionData = useSession();

  return (
    <button
      className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
      onClick={sessionData ? () => signOut() : () => signIn("discord")}
    >
      {sessionData ? "Sign out" : "Sign in"}
    </button>
  );
};
