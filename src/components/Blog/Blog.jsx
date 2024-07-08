import React from "react";
import CustomButton from "../Ui/CustomButton/CustomButton";
import CustomBlogCard from "./_component/CustomBlogCard/CustomCard";
import useGetData from "../../Hooks/useGetData";

function Blog() {
  const { data, loading, error } = useGetData("http://localhost:1337/api/blogs?populate=*");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;
  console.log(data);

  return (
    <section className="block justify-center items-center pt-16 pb-16">
      <div className="bg-white dark:bg-black font-roboto pt-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-[#333] dark:text-gray-200 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-[#ff4800ab] after:rounded-full">
              LATEST BLOGS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-[800px] lg:max-w-[1500px] mx-auto">
            {data?.data.map((blog) => (
              <CustomBlogCard key={blog.id} blog={{ ...blog.attributes, id: blog.id }} />
            ))}
          </div>
        </div>
        <div className="w-fit mx-auto mt-16">
          <CustomButton>view all</CustomButton>
        </div>
      </div>
    </section>
  );
}

export default Blog;
