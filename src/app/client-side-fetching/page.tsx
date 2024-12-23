"use client";
import React, { useEffect, useState } from "react";

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

const Page = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const parsedResponse: Product[] = await response.json();
      console.log("Products >>>", parsedResponse);
      setData(parsedResponse);
    };
    fetchData();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8 flex justify-center">
        Client Side Data Fetching
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.map((product, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 border border-gray-300 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <p className="text-xl font-bold text-gray-700 text-center">
               {product.title}
            </p>
            <p className="text-gray-700 font-medium">
              <strong>Price:</strong> ${product.price}
            </p>
            <p className="text-gray-700 font-medium">
              <strong>Category:</strong> {product.category}
            </p>
            <p className="text-gray-700 font-medium">
              <strong>Description:</strong> {product.description}
            </p>
            <p className="text-gray-700 font-medium">
              <strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)
            </p>
            <button
              className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
