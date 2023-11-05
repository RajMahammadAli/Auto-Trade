import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const [blogPosts, setSetBlogPosts] = useState([]);
  useEffect(() => {
    fetch(`blogsPost.json`)
      .then((res) => res.json())
      .then((data) => setSetBlogPosts(data));
  }, []);

  return (
    <div className="bg-blue-400 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-8 text-center">
          Discover Our Car Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm mb-2">{post.date}</p>
              <p className="text-gray-800">{post.content}</p>
              <Link to={`/home`} className="text-blue-600 mt-4 hover:underline">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
