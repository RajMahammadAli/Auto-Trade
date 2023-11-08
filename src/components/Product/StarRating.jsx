import React from "react";

function StarRating({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const filled = i <= rating ? "text-yellow-400" : "text-gray-300";
    stars.push(
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        className={`w-6 h-6 ${filled}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 2l2.928 8.482h7.072l-5.75 4.813 2.18 7.13L12 18.585l-7.43 4.82 2.18-7.13-5.75-4.814h7.072L12 2zm0 0"
        />
      </svg>
    );
  }

  return <div className="flex items-center space-x-1">{stars}</div>;
}

export default StarRating;
