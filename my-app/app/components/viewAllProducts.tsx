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

interface ViewProductsProps {
  filterQuery: string;
  filterLabels: string[];
}

const ViewAllProducts: React.FC<ViewProductsProps> = ({
  filterQuery,
  filterLabels,
}) => {
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

  // For the search functionality
  let filteredProducts = productsList?.filter(
    (item) =>
      item.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
      item.brand.toLowerCase().includes(filterQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(filterQuery.toLowerCase())
  );

  // THE ONE WE ARE WORKING ON
  // filteredProducts = productsList?.filter((item) =>
  //   filterLabels.includes(item.name.toLowerCase())
  // );

  // Apply filters based on filterLabels in the menu
  // filterLabels.forEach((item: string) => {
  //   filteredProducts = filteredProducts?.filter((product: any) =>
  //     product?.keyingredients.some((ingredient: string) =>
  //       ingredient.toLowerCase().includes(item.toLowerCase())
  //     )
  //   );
  // });

  // filteredProducts = productsList?.filter((item) =>
  //   item.keyingredients.some((ingredient: string) =>
  //     filterLabels.includes(ingredient.toLowerCase())
  //   )
  // );
  // filterLabels.forEach((item: string) => {
  //   filteredProducts = filteredProducts?.filter((product: any) =>
  //     product?.keyingredients.some((ingredient: string) =>
  //       ingredient.toLowerCase().includes(item.toLowerCase())
  //     )
  //   );
  // });

  // filterLabels.forEach((item: string) => {
  //   filteredProducts = filteredProducts?.filter((product: any) =>
  //     product?.keyingredients.some((ingredient: string) =>
  //       ingredient.toLowerCase().includes(filterLablels)
  //     )
  //   );
  // });

  return (
    <>
      <div className="bg-customLightGreen px-6 pb-20">
        <h2 className="text-2xl font-medium pl-2 md:pb-2 text-[#474547]">
          View All Products
        </h2>
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 ">
          {filteredProducts &&
            filteredProducts.map((product) => (
              <div key={product.id}>
                <div className=" border-[#A6A9A4] border-[2px] my-4 flex justify-center bg-white rounded-3xl hover:border-[#858a82] transition duration-300 ease-in-out drop-shadow-custom hover:drop-shadow-customHover">
                  <Image
                    src={product.photo}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="self-center rounded-3xl "
                  />
                </div>
                <p className="text-center font-medium text-[#474547]">
                  {" "}
                  {product.brand.toUpperCase()}
                </p>
                <p className="text-center text-sm text-[#474547]">
                  {product.name}
                </p>
                <div className="flex flex-row justify-center items-center">
                  <p className=" text-[#EBD300] md:text-xl">
                    {getStarRating(product.rating)}
                  </p>
                  <p className="pl-1 text-sm ">{product.rating}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ViewAllProducts;
