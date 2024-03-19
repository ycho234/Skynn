'use client'
import exp from "constants"
 import data from "../data"

// setting types for the product
 interface Product {
   id: number;
   name: string;
 }
 
 // setting types for the view products
 interface ViewProductsProps {
   products: Product[];
   filterQuery: string;
 }
 
 const ViewProducts: React.FC<ViewProductsProps> = ({ products, filterQuery }) => {
   // Filtering logic
   const filteredProducts = products.filter(item =>
     item.name.toLowerCase().includes(filterQuery.toLowerCase())
   );
 
   return (
     <>
       <h1>Products</h1>
       <ul>
         {filteredProducts.map(item => (
           <li key={item.id}>{item.name}</li>
         ))}
       </ul>
     </>
   );
 }
 
 export default ViewProducts;
 