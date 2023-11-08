import { useNavigate } from "react-router-dom";

export default function ({ brandName }) {
  const { brand, image, id } = brandName;

  const navigate = useNavigate();

  const handleBrandProducts = () => {
    navigate(`/brandProducts/${id}`);
  };
  return (
    <>
      <div onClick={handleBrandProducts} className="cursor-pointer">
        <div className="card bg-base-100 shadow-xl image-full my-5 lg:my-0">
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
