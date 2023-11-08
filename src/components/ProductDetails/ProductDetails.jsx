import { useLoaderData, useParams } from "react-router-dom";

export default function () {
  const productDetails = useLoaderData();

  const { id } = useParams();
  const parseId = parseInt(id);
  const brandNames = productDetails.find((detail) => detail.id === parseId);
  console.log(brandNames);
  const { image, name, brand, type, price, rating, description, specs } =
    brandNames;

  return (
    <div className="w-full mx-auto p-6">
      <div className="flex flex-col md:flex-row mx-auto bg-white p-4 rounded-lg shadow-lg">
        <div className="md:w-1/2 p-4">
          <img src={image} alt={name} className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 p-4">
          <h1 className="text-2xl font-semibold mb-4">{name}</h1>
          <p className="text-gray-600 mb-4">
            <span className="font-bold">Brand:</span> {brand}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-bold">Type:</span> {type}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-bold">Price:</span> {price}
          </p>
          <div className="text-yellow-500">
            {Array.from({ length: rating }, (v, i) => (
              <span key={i} className="mdi mdi-star text-xl"></span>
            ))}
          </div>
          <p className="mt-4">{description}</p>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Specifications:</h2>
            <ul className="list-disc ml-5">
              {Object.entries(specs).map(([key, value]) => (
                <li key={key}>
                  <span className="font-bold">{key}:</span> {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
