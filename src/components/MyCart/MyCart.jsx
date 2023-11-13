import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

export default function MyCartPage() {
  const { user } = useContext(AuthContext);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/products?email=${user.email}`, {
        withCredentials: true,
      })
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
        fetch(`http://localhost:5000/products/${id}`, {
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
      )}
    </div>
  );
}
