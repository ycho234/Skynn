"use client";
import { useState } from "react";
import { app } from "@/app/firebase/config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F3F6F1]">
      <Image src="/logo.png" alt="Skynn Logo" width={300} height={300} />
      <div className="flex flex-col items-start">
        <p className="text-[#6C696C] text-sm mt-14 lg:mt-8 mb-1">
          Email Address
        </p>
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-[#FEFFFD] border-[2px] border-[#A6A9A3] text-[#716e71] placeholder-[#8D8B8D] w-72 py-1 h-10 text-center rounded-full text-sm focus:outline-none"
          style={{
            WebkitTextFillColor: "#8D8B8D",
            WebkitBoxShadow: "0 0 0 30px #FEFFFD inset",
          }}
        />
      </div>
      <div className="flex flex-col items-start mb-7 ">
        <p className="text-[#6C696C] text-sm mt-4 mb-1">Create a password</p>
        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-[#FEFFFD] border-[2px] border-[#A6A9A3] text-[#716e71] placeholder-[#8D8B8D] w-72 py-1 h-10 text-center rounded-full text-sm focus:outline-none"
          style={{
            WebkitTextFillColor: "#8D8B8D",
            WebkitBoxShadow: "0 0 0 30px #FEFFFD inset",
          }}
        />
      </div>
      <button
        onClick={handleSignUp}
        className="bg-[#DCDFDA] border-[3px] border-[#A6A9A3] text-[#474547] w-72 py-1 h-10 rounded-full text-lg font-medium mb-1"
      >
        Sign Up
      </button>
      <Link href="/sign-in">
        <p className="hover:underline text-[#7C7C7C] text-sm mb-34 lg:mb-2 mt-2">
          Already have an account? Sign in.
        </p>
      </Link>
    </div>
  );
};

export default SignUp;
