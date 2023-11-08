import { useLoaderData, useParams } from "react-router-dom";
import Product from "../Product/Product";

export default function () {
  const details = useLoaderData();
  const { id } = useParams();
  const parseId = parseInt(id);
  const brandNames = details.find((detail) => detail.id === parseId);
  const toyotaAdd = brandNames?.advertisements || [];

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
        {brandNames.brandProducts?.length === 0 ? (
          <div>
            <p>
              No products available for {brandNames.brandName} at the moment.
            </p>
          </div>
        ) : (
          <div className="w-full md:grid grid-cols-3 gap-4 mx-auto">
            {brandNames.brandProducts ? (
              brandNames.brandProducts.map((product, index) => (
                <Product key={index} product={product}></Product>
              ))
            ) : (
              <div>
                <p>
                  No products available for {brandNames.brandName} at the
                  moment.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
