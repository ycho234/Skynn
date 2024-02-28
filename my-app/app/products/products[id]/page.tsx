"use client";
import Image from "next/image";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { app } from "../../firebase/config";

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
              <br></br>
              <h3 className="font-bold">{product.name}</h3>
              <Image
                src={product.photo}
                alt={product.name}
                width={200}
                height={200}
              />
              <p>Description: {product.description}</p>
              <p>Price: £{product.price}</p>
              <p>Brand: {product.brand}</p>
              <p>For Skin Types: {product.skinType}</p>
              <p>Buy from: {product.shops}</p>
              <p>Rating: {product.rating}</p>
              <p>Key Ingredients: {product.keyIngredients}</p>
              <p>Benefits: {product.benefits}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
