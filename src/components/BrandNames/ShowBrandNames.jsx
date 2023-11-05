import { useNavigate } from "react-router-dom";

export default function ({ brandName }) {
  const { brand, image, id } = brandName;

  const navigate = useNavigate();

  const handleBrandProducts = () => {
    console.log("Hello world");
    navigate(`/brandProducts/${id}`);
  };
  return (
    <>
      <div onClick={handleBrandProducts} className="cursor-pointer">
        <div className="card w-96 bg-base-100 shadow-xl image-full my-5 lg:my-0">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body justify-center items-center">
            <h2 className="card-title text-3xl">{brand}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
