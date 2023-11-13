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
