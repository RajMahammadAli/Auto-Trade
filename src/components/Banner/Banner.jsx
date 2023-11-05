export default function () {
  return (
    <>
      <div
        className="hero min-h-screen mt-8"
        style={{
          backgroundImage: "url(https://i.ibb.co/f0Hy66Y/Banner-Car.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-full">
            <h1 className="mb-5 text-5xl font-bold">
              Discover Excellence on Wheels!
            </h1>
            <div className="max-w-md mx-auto">
              <p className="mb-5">
                Explore a curated selection of top-brand cars. Your dream ride
                is just a click away. Start your journey today!
              </p>
            </div>
            <button className="btn bg-[#196EAF] border-none">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
