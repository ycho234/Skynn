"use-client";
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
    stars.push("★");
  }

  if (halfStar) {
    stars.push("★");
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push("☆");
  }

  return stars.join("");
}

export default function TrendingProducts() {
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
    <>
      <div className="bg-customLightGreen px-6 pt-10 py-6 relative">
        <h2 className="text-2xl font-medium pl-2 md:pb-2 text-[#474547]">
          Highest Rated Products
        </h2>
        {/* <div className="overflow-x-scroll flex"> */}
        {/* need to fix this!!!!! */}
        <div className="relative flex gap-6 overflow-x-auto bg-red-300 ">
          {productsList &&
            productsList
              .filter((product) => product.rating === 5)
              .map((product) => (
                <div key={product.id}>
                  <div className=" w-32 md:w-52 border-[#A6A9A4] border-[2px] my-4 flex justify-center bg-white rounded-3xl hover:border-[#858a82] transition duration-300 ease-in-out drop-shadow-custom hover:drop-shadow-customHover">
                    <Image
                      src={product.photo}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="self-center rounded-3xl"
                    />
                  </div>
                  <p className="text-center font-medium text-xs md:text-sm text-[#474547] bg-green-300">
                    {product.brand.toUpperCase()}
                  </p>
                  {/* <p className="text-center text-[10px] text-[#474547] bg-blue-300">
                    {product.name}
                  </p> */}
                  <div className="flex flex-row justify-center items-center bg-yellow-600">
                    <p className="text-[#EBD300] md:text-xl">
                      {getStarRating(product.rating)}
                    </p>
                    <p className="pl-1 text-sm">{product.rating}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
