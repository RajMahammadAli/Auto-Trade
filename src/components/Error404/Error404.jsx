import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div>
          <h1 className="text-7xl">404 Errors</h1>
          <div className="w-full flex justify-center pt-4">
            {/* error button added */}
            <Link className="btn btn-primary" to="/">
              Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
