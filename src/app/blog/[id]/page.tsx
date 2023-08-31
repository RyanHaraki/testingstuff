"use client";
// src/app/blog/[slug]/page.tsx
import { blogs } from "@/data";

const Blog = ({ params }: { params: { id: string } }) => {
  const blog = blogs.filter((blog) => blog.id === params.id)[0];

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default Blog;
