import Link from "next/link"

export default function Footer() {
    return (
    <>
    <div className="flex items-center justify-evenly py-2 border-t fixed border-gray-200 border-solid bottom-0 w-full bg-orange-100">
  <div className="flex space-x-14">
    <div className="flex flex-col items-center">
      <Link href="/" className="flex items-center">
      <span>Home</span>
      </Link>
    </div>
    <div className="flex flex-col items-center">
      <Link href="/Products" className="flex items-center">
      <span>Products</span>
      </Link>
    </div>
    <div className="flex flex-col items-center">
      <Link href="/sign-in" className="flex items-center">
      <span>Sign In</span>
      </Link>
    </div>
    <div className="flex flex-col items-center">
      <Link href="/sign-up" className="flex items-center">
      <span>Sign Up</span>
      </Link>
    </div>
  </div>
</div>
</>
)
}