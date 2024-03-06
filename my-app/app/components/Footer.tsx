import Link from "next/link";
import { Search, TrendingUp, Smile, User } from "lucide-react";

export default function Footer() {
  return (
    <>
      <div className="flex items-center justify-evenly py-2 border-t fixed border-[#BFC5BB] border-solid bottom-0 w-full bg-[#E5EAE1]">
        <div className="flex space-x-14">
          <div className="flex flex-col items-center">
            <Link href="/" className="flex items-center">
              <Search size={24} />
            </Link>
            <span className="text-sm">Home</span>
          </div>
          <div className="flex flex-col items-center">
            <Link href="/products" className="flex items-center">
              <TrendingUp size={24} />
            </Link>
            <span className="text-sm">Products</span>
          </div>
          <div className="flex flex-col items-center">
            <Link href="/sign-in" className="flex items-center">
              <Smile size={24} />
            </Link>
            <span className="text-sm">Sign In</span>
          </div>
          <div className="flex flex-col items-center">
            <Link href="/sign-up" className="flex items-center">
              <User size={24} />
            </Link>
            <span className="text-sm">Sign Up</span>
          </div>
        </div>
      </div>
    </>
  );
}
