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
export default function ProductsPage() {
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
    <div>
      <h1>Products</h1>
      <ul>
        {productsList &&
          productsList.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
