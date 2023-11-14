import { useLoaderData, useParams } from "react-router-dom";
import Product from "../Product/Product";
import { useEffect, useState } from "react";

export default function () {
  const [demoBrandProducts, setDemoProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const details = useLoaderData();
  const { id } = useParams();
  const parseId = parseInt(id);
  const brandNames = details.find((detail) => detail.id === parseId);

  const brand = brandNames.brandName;
  const toyotaAdd = brandNames?.advertisements || [];

  useEffect(() => {
    fetch(`https://server-side-brand-shop.vercel.app/products`)
      .then((res) => res.json())
      .then((data) => {
        // Filter data based on the desired brand (in this case, "Toyota")
        const productsByBrand = data.filter(
          (item) => item.brand === brand && !item.email
        );
        setDemoProducts(productsByBrand);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [brand]); // Add brand as a dependency to the useEffect

  if (!brandNames) {
    return <p>Brand not found</p>;
  }

  return (
    <div>
      {/* Carousel starts here */}
      <div className="carousel w-full max-h-96 md:max-h-600px overflow-hidden relative">
        {toyotaAdd.map((image, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full"
          >
            <img src={image} className="w-full" alt={`Slide ${index + 1}`} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide${index === 0 ? toyotaAdd.length : index}`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide${(index + 2) % (toyotaAdd.length + 1) || 1}`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Carousel ends here */}

      <div className="container my-14 mx-auto">
        {loading ? ( // Display loading message while data is being fetched
          // <p>Loading...</p>
          <div className="w-full flex justify-center items-center h-[200px]">
            <span className="loading loading-infinity loading-lg"></span>
          </div>
        ) : demoBrandProducts.length === 0 ? (
          <div>
            <p>No product available right now</p>{" "}
          </div>
        ) : (
          <div className="w-full md:grid grid-cols-3 gap-4 mx-auto">
            {demoBrandProducts.map((product, index) => (
              <Product key={index} product={product}></Product>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
