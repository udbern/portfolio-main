import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaShare } from 'react-icons/fa';

function BlogDetails() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/blogs/${blogId}?populate=*`);
        const data = await response.json();

        if (response.ok) {
          setBlog(data.data);
        } else {
          setError(data.error.message || 'Unknown error');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [blogId]);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center">Error fetching blog content: {error}</p>;
  }

  if (!blog) {
    return <p className="text-center">Blog not found.</p>;
  }

  const { attributes } = blog;

  return (
    <div className="max-w-4xl mx-auto py-16">
      <div className="max-w-5xl mx-auto border p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold">{attributes.title}</h1>
          <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors">
            <FaShare />
          </button>
        </div>
        <p className="text-gray-600 mb-4">By {attributes.author}</p>
        <p>{attributes.content}</p>
      </div>
    </div>
  );
}

export default BlogDetails;
