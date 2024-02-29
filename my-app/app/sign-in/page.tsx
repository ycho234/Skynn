"use client";
import { useState } from "react";
import { app } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = async () => {
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log({ user });
        sessionStorage.setItem("user", String(true));
        setEmail("");
        setPassword("");
        router.push("/sign-out");
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
          onClick={handleSignIn}
          className="bg-[#DCDFDA] border-[3px] border-[#A6A9A3] text-[#474547] w-72 py-1 h-10 rounded-full text-lg font-medium mb-1"
        >
          Sign In
        </button>
        <Link href="/sign-up">
          <p className="hover:underline text-[#7C7C7C] text-sm mb-34 lg:mb-2 mt-2">
            Don&apos;t have an account? Sign up.
          </p>
        </Link>
      </div>
    </>
  );
};

export default SignIn;
