"use client";
import { useState } from "react";
import { app } from "@/app/firebase/config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log({ user });
        sessionStorage.setItem("user", String(true));
        setEmail("");
        setPassword("");
        router.push("/sign-in");
        alert("You have successfully signed up! Please sign in.");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="min-h-screen flex-col cols-1 items-center justify-center bg-customLightGreen">
      <div>
        <Image src="/logo.png" alt="Skynn Logo" width={160} height={40} />
      </div>
      <div className="bg-customLightGreen p-10 rounded-lg shadow-xl w-96">
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
          onClick={handleSignUp}
          className="w-full p-3 bg-customDarkGreen rounded-3xl text-white hover:bg-lime-800"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
