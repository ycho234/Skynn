import Link from "next/link"
import {Search, TrendingUp, Smile, User} from 'lucide-react'

export default function Footer() {
    return (
    <>
    <div className="flex items-center justify-evenly py-2 border-t fixed border-gray-200 border-solid bottom-0 w-full bg-[#d0d6ca]">
  <div className="flex space-x-14">
    <div className="flex flex-col items-center">
      <Link href="/" className="flex items-center">
      <Search size={24} />
      </Link>
      <span>Home</span>
    </div>
    <div className="flex flex-col items-center">
      <Link href="/products" className="flex items-center">
      <TrendingUp size={24} />
      </Link>
      <span>Products</span>
    </div>
    <div className="flex flex-col items-center">
      <Link href="/sign-in" className="flex items-center">
      <Smile size={24} />
      </Link>
      <span>Sign In</span>
    </div>
    <div className="flex flex-col items-center">
      <Link href="/sign-up" className="flex items-center">
      <User size={24} />
      </Link>
      <span>Sign Up</span>
    </div>
  </div>
</div>
</>
)
}