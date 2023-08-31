// src/app/pages/index.tsx
import { blogs } from "./data";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <div>{blog.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
