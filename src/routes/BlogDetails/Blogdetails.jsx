import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { useParams } from 'react-router-dom';


function Blogdetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/blogs/${id}?populate=*`);
        const data = await response.json();
        setBlog(data.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div className='text-center'>Loading...</div>;
  if (error) return <div className='text-center'>Error: {error.message}</div>;

  const { title, publishedAt, author, image, content } = blog.attributes;

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className='p-5 '>
        <img
          src={`http://localhost:1337${image.data.attributes.url}`}
          alt={title}
          className="w-full h-96 object-cover rounded-md  object-center"
        />
        </div>
        
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
          <div className="text-gray-600 mb-4">
            <span className="block mb-2">Published on: {new Date(publishedAt).toLocaleDateString()}</span>
            <span className="block">Author: {author || 'Anonymous'}</span>
          </div>
          <Markdown className="prose prose-lg text-gray-700">{content}</Markdown>
        </div>
      </div>
    </section>
  );
}

export default Blogdetails;
