import React from 'react';
import { useUserContext } from '../context/Products';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { products } = useUserContext();
  let categories = products ? [...new Set(products.map(product => product.category))] : [];
  
  return (
    <nav className="w-[18vw] flex flex-col justify-start p-8 items-center bg-gray-700 rounded">
      <Link to={'/create'} className="border-2 border-blue-200 p-2 rounded-md hover:bg-blue-300">
        Add New Product
      </Link>
      <hr className="w-40 text-white mt-5" />
      <h1 className="text-xl font-semibold mt-5">Category Filter</h1>
      <div className="mt-5 space-y-3">
        <div className='flex items-center'>
          <span className="rounded-full h-3 w-3 mr-2 bg-yellow-200"></span>
          <Link to={'/'} className="text-white hover:text-gray-300">
            All
          </Link>
        </div>
        {categories.map((cat, idx) => (
          <div key={idx} className="flex items-center">
            <span
              className={`rounded-full h-3 w-3 mr-2 ${
                ["bg-blue-200", "bg-pink-200", "bg-green-200", "bg-orange-200"][idx % 4]
              }`}
            ></span>
            <Link to={`/?category=${encodeURIComponent(cat)}`} className="text-white hover:text-gray-300">
              {cat}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
