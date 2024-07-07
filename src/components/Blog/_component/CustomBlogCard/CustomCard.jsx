import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

function CustomBlogCard({ blog }) {
  const imageUrl = blog.image?.data?.attributes?.url
    ? `http://localhost:1337${blog.image.data.attributes.url}`
    : 'default-image-url'; // Fallback image URL

  return (
    <div className="cursor-pointer rounded border-2 border-gray-800 overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] mx-5 md:mx-0 relative group">
      <img
        src={imageUrl}
        alt=""
        className="w-full h-96 object-cover object-center bg-overlay"
      />
      <div className="p-6 absolute bottom-0 left-0 right-0 bg-[#7c2b2b] opacity-0 group-hover:opacity-100 transition-all duration-300">
        <span className="text-sm block text-gray-100 mb-2">
          {new Date(blog.publishedAt).toLocaleDateString()} | BY {blog.author || 'Anonymous'}
        </span>
        <h3 className="text-xl font-bold text-gray-100">{blog.title}</h3>
        <div className="h-0 flex flex-col overflow-hidden group-hover:h-[110px] group-hover:mt-4 transition-all duration-300">
          <p className="text-gray-100 text-sm">
            {blog.body?.substring(0, 200)}...
          </p>
          <div className="flex justify-end">
            <Link to={`/blogs/${blog.Id}`} className="capitalize bg-transparent text-white flex items-center">
              view more <MdOutlineArrowRightAlt />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomBlogCard;
