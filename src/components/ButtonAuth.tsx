"use client";

import classNames from "classnames";
import { signIn, signOut, useSession } from "next-auth/react";
import '@/styles/styles.css'

export default function ButtonAuth() {
  const { data: session, status } = useSession();

  console.log({ session, status });

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button
          onClick={() => signOut()}
          className="btn btn-danger"
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn()} style={{fontWeight: '500', fontSize: '14px'}} className={classNames('olvidaste', 'buttonlogin')}><b>Iniciar Sesión</b></button>
    </>
  );
}
