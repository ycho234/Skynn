"use client";
import Image from "next/image";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { app } from "../firebase/config";

interface ProductType {
  name: string;
  description: string;
  brand: string;
  price: number;
}

interface errorType {
  message: string;
}

export default function ViewAllProducts() {
  const [productsList, setProductList] = useState<null | any[]>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const db = getFirestore(app);
        const colRef = collection(db, "products");
        const snapshot = await getDocs(colRef);
        let productsArray: ProductType[] | any = [];
        snapshot.docs.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProductList(productsArray);
      } catch (error: errorType | any) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-customLightGreen">
      {productsList &&
        productsList.map((product) => (
          <div
            key={product.id}
            className="border-red-600 border-4 w-[80%] m-auto mb-10 flex justify-center bg-white rounded-lg"
          >
            <Image
              src={product.photo}
              alt={product.name}
              width={300}
              height={300}
            />
          </div>
        ))}
    </div>
  );
}
