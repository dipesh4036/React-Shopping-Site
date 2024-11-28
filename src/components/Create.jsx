import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/Products';


const Create = ({ onSubmit }) => {
  const { products, setproducts } = useUserContext();
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image || !title || !category || !price || !description) {
      alert('All fields are required!');
      return;
    }

    const newProduct = {
        id:nanoid(),
      image,
      title,
      category,
      price: parseFloat(price), 
      description,
    };

    setproducts([...products, newProduct]);

    if (onSubmit) {
      onSubmit(newProduct);
    }

    setImage('');
    setTitle('');
    setCategory('');
    setPrice('');
    setDescription('');

    alert('Product added successfully!');
  };

  return (
    <div className="h-screen w-screen flex flex-col mt-10 items-center p-4">
      <h1 className="text-4xl mb-6 text-center">Add New Product</h1>
      <form
        className="flex flex-col gap-4 w-full max-w-lg p-8 rounded-lg"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Image Link"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="p-3 border text-black bg-white border-gray-300 rounded"
          required
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 border text-black bg-white border-gray-300 rounded"
          required
        />
        <div className="flex flex-col gap-4 sm:flex-row">
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-3 border text-black bg-white border-gray-300 rounded flex-1"
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="p-3 border text-black bg-white border-gray-300 rounded flex-1"
            required
          />
        </div>
        <textarea
          placeholder="Enter Product Description Here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-3 border text-black bg-white border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="p-2 border-2 md:w-1/3 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded transition duration-200"
        >
          Add New Product
        </button>
      </form>
    </div>
  );
};

export default Create;
