import React from 'react';
import Navbar from './Navbar';
import { Link, useLocation } from 'react-router-dom';
import { useUserContext } from '../context/Products';

const Home = () => {
  const { products } = useUserContext();
  const { search } = useLocation();
  const category = new URLSearchParams(search).get('category');
  
  const filteredProducts = (category === 'All' || !category)
    ? products
    : products.filter(product => product.category === category);

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full md:w-[82vw] bg-gray-800 flex flex-wrap items-center justify-center gap-4 p-4 md:p-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link
              to={`/details/${product.id}`}
              key={product.id}
              className="w-full sm:w-[80%] md:w-64 h-auto sm:h-60 md:h-80 bg-gray-300 shadow-lg rounded-lg overflow-hidden flex flex-col hover:cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              <img
                className="w-full h-32 object-cover"
                src={product.image}
                alt={product.title}
              />
              <div className="p-4 flex flex-col flex-grow">
                <p className="text-sm text-gray-500 uppercase">
                  {product.category}
                </p>
                <h2 className="text-lg font-semibold text-gray-800 mt-1 line-clamp-1">
                  {product.title}
                </h2>
                <p className="text-md text-blue-500 font-bold mt-2">
                  ${product.price}
                </p>
                <p className="text-sm text-gray-600 mt-2 flex-grow line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center mt-2">
                  <p className="text-sm text-gray-500">
                    Rating: ({product.rating.rate})
                  </p>
                  <p className="text-sm text-gray-500 ml-auto">
                    {product.rating.count} reviews
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-white min-h-screen text-lg">Loading products...</p>
        )}
      </div>
    </>
  );
};

export default Home;
