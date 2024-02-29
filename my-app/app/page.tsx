"use-client";
import Image from "next/image";
import Link from "next/link";
// import Data from './firebase/config'

export default function Home() {
  // Data();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F3F6F1] ">
      <Image src="/logo.png" alt="Skynn Logo" width={300} height={300} />
      <div className=" text-center space-y-4 mx-10 md:mx-[30vw] ">
        <p className=" pt-10 text-lg  text-[#91968E]">
          Find the latest skincare trends, what works for your skin &
          transformative ingredients!
        </p>
        <p className=" text-lg text-[#91968E]">
          Track your routine & keep up to date with your favourite
          skinfluencers!
        </p>
      </div>
      <div className=" flex flex-col gap-2 lg:flex-row lg:gap-5 pt-8">
        <Link href="/sign-up">
          <button className="bg-[#DCDFDA] border-[3px] border-[#A6A9A3] text-[#474547] w-56 py-1 rounded-full mt-5 text-lg font-medium">
            {" "}
            Register{" "}
          </button>
        </Link>
        <Link href="/sign-in">
          <button className="bg-[#FEFFFD] border-[3px] border-[#A6A9A3] text-[#474547] w-56 py-1 rounded-full mt-5 text-lg font-medium">
            {" "}
            Login{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}
