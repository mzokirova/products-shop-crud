// ProductDetail.js
import  { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../../components/ProductPage/ProductCard";

export default function SingleProduct() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError("Error fetching product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return null; 

  return (
    <div className="w-full h-screen flex justify-center">

<a href="#" className="flex flex-col h-[80%] items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:gap-x-8 md:max-w-5xl md:p-20 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" type="div">
    <img className="object-cover w-full rounded-t-lg h-full md:h-full md:w-[60%] md:rounded-none md:rounded-s-lg" src={product.images[0]} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Price: ${product.price}
          </p>
          <Link to="/products" className="inline-flex max-w-44 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
         
          Back to Products 
          </Link>
    </div>
</a>

    </div>
  );
}
