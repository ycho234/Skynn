"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import products from "../firebase/config";

products();

export default function ProductsPage() {
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
}

// export default function Products() {
//   return (
//     <div
//       style={{
//         backgroundColor: "#f3f6f1",
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div>
//         <Image src="/logo.png" alt="Skynn Logo" width={80} height={20} />
//         <h1 className="text-xl text-center text-customDarkGreen mt-10">
//           Products Page
//         </h1>
//       </div>
//     </div>
//   );
// }
