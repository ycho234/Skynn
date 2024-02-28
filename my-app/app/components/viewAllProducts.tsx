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


function getStarRating(rating: number) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 === 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push('⭐️');
  }

  if (halfStar) {
    stars.push('⭐️');
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push('☆');
  }

  return stars.join('');
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
    <div className="bg-customLightGreen grid grid-cols-2 gap-1">
      {productsList &&
        productsList.map((product) => (
          <div key={product.id}>
            <div
              className="border-gray-300 border-4 mx-10 my-10 flex justify-center bg-white rounded-lg"
            >
              <Image
                src={product.photo}
                alt={product.name}
                width={200}
                height={200}
                className="self-center"
              />
            </div>
            <p className="text-center"> {product.brand}</p>
            <p className="text-center">{product.name}</p>
            <p className="text-center">Rating {getStarRating(product.rating)}</p>
          </div>
        ))}
    </div>
  ); 
}
