"use-client";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{ backgroundColor: '#f3f6f1', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <h1 className="text-xl text-center mt-10 text-gray-500">Homepage</h1>
        <Image src="/logo.png" alt="Skynn Logo" width={800} height={200} />
      </div>
    </div>
  );
}
