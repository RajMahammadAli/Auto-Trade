import { useEffect, useState } from "react";
import ShowBrandNames from "./ShowBrandNames";

export default function () {
  const [BrandNames, setBrandNames] = useState([]);
  useEffect(() => {
    fetch(`brandCar.json`)
      .then((res) => res.json())
      .then((data) => setBrandNames(data));
  }, []);
  return (
    <>
      <div className="container mx-auto lg:my-6">
        <div className="text-center my-6">
          <h1 className="text-3xl font-bold p-2">Featured Brands</h1>
          <p>
            Explore our top brands and discover a world of luxury, performance,
            and innovation. <br /> Find your perfect car today!
          </p>
        </div>
        <div className="md:grid grid-cols-3 gap-4">
          {BrandNames.map((brandName) => (
            <ShowBrandNames
              key={brandName.id}
              brandName={brandName}
            ></ShowBrandNames>
          ))}
        </div>
      </div>
    </>
  );
}
