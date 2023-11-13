import { useContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function () {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const allProducts = useLoaderData();
  const { id } = useParams();

  const product = allProducts.find((detail) => detail._id === id);

  console.log(product);
  const [updatedProduct, setUpdatedProduct] = useState({
    image: product.image,
    name: product.name,
    brand: product.brand,
    type: product.type,
    price: product.price,
    // .toString(), // Convert to string
    rating: product.rating,
    email,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here (e.g., send data to the server).
    // For this example, we'll just display the updated product data in the console.
    console.log(updatedProduct);
    fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        toast("Product updated successfully");
      })
      .catch((error) => {
        console.error("Error updating product:", error);
        // Handle the error, e.g., show an error message to the user
      });
  };
  return (
    <>
      <div className="container mx-auto mt-8 mb-8">
        <h2 className="text-3xl font-semibold mb-4">Update Product</h2>
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
              value={updatedProduct.image}
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
              value={updatedProduct.name}
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
              value={updatedProduct.brand}
              onChange={handleInputChange}
              readOnly
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
              value={updatedProduct.type}
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
              type="text" // Change to text input
              id="price"
              name="price"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
              value={updatedProduct.price}
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
              value={updatedProduct.rating}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Update Product
          </button>
        </form>
        <Link to={`/`}>
          <button className="mt-4 bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500">
            Cancel
          </button>
        </Link>
        <Toaster
          toastOptions={{
            className: "",
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
            },
          }}
        />
      </div>
    </>
  );
}
