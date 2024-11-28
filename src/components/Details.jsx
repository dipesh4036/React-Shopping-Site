import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/Products";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, setproducts } = useUserContext();
  const product = products.find((p) => p.id === parseInt(id));

  const handleDelete = () => {
    const updatedProducts = products.filter((p) => p.id !== parseInt(id));
    setproducts(updatedProducts);
    toast.success("Product deleted successfully!");
    navigate("/");
  };

  const handleEdit = () => {
    navigate("/create", { state: { product } });
  };

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row bg-gray-500">
      <Link className="text-center" to={"/"}>
        <i className="ri-arrow-left-line font-bold text-5xl"></i>Back
      </Link>
      <div className="flex-shrink-0 flex flex-col p-8 md:p-10 w-full md:w-1/2 items-center justify-center">
        <img
          className="w-full max-w-md h-auto rounded-lg hover:scale-105 transition-transform duration-300 object-cover"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="flex-1 p-6 md:p-10 overflow-y-auto flex flex-col justify-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          {product.title}
        </h1>
        <p className="text-sm text-gray-500 mt-1 uppercase">
          Category: {product.category}
        </p>
        <p className="text-lg text-blue-300 hover:text-blue-400 font-semibold mt-2">
          ${product.price}
        </p>
        <p className="text-sm text-white/60 mt-3">{product.description}</p>
        <div className="flex items-center mt-4">
          <span className="text-sm">Rating: {product.rating?.rate} ⭐</span>
          <span className="text-sm text-gray-500 ml-auto">
            {product.rating?.count} reviews
          </span>
        </div>
        <div className="flex w-full md:w-1/3 space-x-4 mt-5">
          <button
            className="w-full md:w-1/2 border-2 border-blue-300 text-white py-2 px-4 rounded hover:bg-blue-300 hover:text-black transition duration-200"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            className="w-full md:w-1/2 border-2 border-red-300 text-white py-2 px-4 rounded hover:bg-red-300 hover:text-black transition duration-200"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
