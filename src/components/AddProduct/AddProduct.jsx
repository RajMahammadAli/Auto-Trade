import React, { useState } from "react";

const AddProductPage = () => {
  const [product, setProduct] = useState({
    image: "",
    name: "",
    brand: "",
    type: "",
    price: "",
    shortDescription: "",
    rating: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here (e.g., send data to the server).

    // For this example, we'll just display the product data in the console.
    console.log(product);
  };

  return (
    <div className="container mx-auto mt-8 mb-8">
      <h2 className="text-3xl font-semibold mb-4">Add a Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-600">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={product.image}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={product.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="brand" className="block text-gray-600">
            Brand Name
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={product.brand}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-600">
            Type
          </label>
          <select
            id="type"
            name="type"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={product.type}
            onChange={handleInputChange}
          >
            <option value="">Select Type</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV (Sports Utility Vehicle)">
              SUV (Sports Utility Vehicle)
            </option>
            <option value="Sports Car">Sports Car</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-600">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={product.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="shortDescription" className="block text-gray-600">
            Short Description
          </label>
          <textarea
            id="shortDescription"
            name="shortDescription"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={product.shortDescription}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-600">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={product.rating}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
