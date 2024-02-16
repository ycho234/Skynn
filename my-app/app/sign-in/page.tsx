"use client";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log({ res });
      sessionStorage.setItem("user", String(true)); // Convert boolean to string
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen flex-col cols-1 items-center justify-center bg-customLightGreen">
      <div><Image src="/favicon.png" alt="Skynn Logo" width={80} height={20} />
      </div>
      <div className="bg-customLightGreen p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-customDarkGreen text-2xl mb-5">Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-500 rounded-3xl outline-none text-white placeholder-gray-500 border-solid border-2 border-gray-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-500 rounded-3xl outline-none text-white placeholder-gray-500 border-solid border-2 border-gray-400"
        />
        <button
          onClick={handleSignIn}
          className="w-full p-3 bg-customDarkGreen rounded-3xl text-white hover:bg-lime-800"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
