import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

export default function MyCartPage() {
  const { user } = useContext(AuthContext);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://server-side-brand-shop.vercel.app/products?email=${user.email}`,
        {
          withCredentials: true,
        }
      )
        .then((res) => res.json())
        .then((data) => setCarts(data))
        .catch((error) => console.error("Error fetching cart data:", error));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-side-brand-shop.vercel.app/products/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json()) // Corrected line
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              setCarts((prevCarts) =>
                prevCarts.filter((item) => item._id !== id)
              );
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting product:", error);
            // Handle error if needed
          });
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">My Cart</h1>
      {carts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {carts.map((product, idx) => (
            <div key={idx} className="bg-white shadow-lg rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-500">{product.brand}</p>
                <p className="text-gray-700">${product.price}</p>
                <p className="text-yellow-400">
                  {/* You can implement a star rating component here */}
                  Rating: {product.rating}
                </p>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none"
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
