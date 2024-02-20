"use client";
import { useState } from "react";
import { app } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = async () => {
    if (!email || !password) {
      alert("Please provide both the email and password you signed up with!");
      throw new Error(
        "Please provide both email and password you signed up with."
      );
    }
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log({ user });
        sessionStorage.setItem("user", String(true));
        setEmail("");
        setPassword("");
        router.push("/");
      })
      .catch((e) => {
        alert(
          "Please create an account first! Or check your email and password."
        );
        console.error(e);
      });
  };

  return (
    <>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSignIn}>Sign In</button>
    </>
  );
};

export default SignIn;
