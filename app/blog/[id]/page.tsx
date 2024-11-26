"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Correct way to access route params in Next.js
import Link from "next/link";
import gsap from "gsap"; // Import GSAP

// Define the blog structure
interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
}

const BlogPost = () => {
  const { id } = useParams()

  // Set up state for blog and recent posts
  const [blog, setBlog] = useState<Blog | null>(null);
  const [recentPosts, setRecentPosts] = useState<Blog[]>([]);

  // Fetch blog data based on the dynamic id
  useEffect(() => {
    if (id) {
      const fetchBlogData = async () => {
        try {
          const response = await fetch("/api/blog");

          if (!response.ok) {
            console.error("Failed to fetch data:", response.statusText);
            return;
          }

          const data = await response.json(); // Parse the response as JSON

          // Find the current blog by id
          const currentBlog = data.find((b: Blog) => b.id === Number(id));
          if (currentBlog) {
            setBlog(currentBlog);
            // Set recent posts (excluding the current post)
            setRecentPosts(data.filter((b: Blog) => b.id !== Number(id)));
          } else {
            console.error("Blog post not found for id:", id);
          }
        } catch (error) {
          console.error("Error fetching blog data:", error);
        }
      };

      fetchBlogData();
    }
  }, [id]);

  // GSAP animation for elements
  useEffect(() => {
    // Animate blog content when it mounts
    gsap.from(".blog-content", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    // Animate sidebar when it mounts
    gsap.from(".sidebar", {
      opacity: 0,
      x: -100,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
    });
  }, []);

  if (!blog) {
    return <p className="text-center text-white">Blog post not found.</p>;
  }

  return (
    <div className="bg-[#002e02] min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Blog Content with GSAP animation */}
        <div className="bg-white p-8 rounded-lg shadow-lg blog-content">
          <h1 className="text-3xl font-bold text-[#002e02] mb-4">{blog.title}</h1>
          <p className="text-gray-600 mb-6">{blog.description}</p>
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full rounded-lg mb-6"
          />
          <p className="text-gray-500">
            {blog.category} - {blog.date}
          </p>
        </div>

        {/* Sidebar with GSAP animation */}
        <aside className="mt-8 sidebar">
          <h2 className="text-white text-2xl font-bold mb-4">Recent Posts</h2>
          <ul>
            {recentPosts.map((post) => (
              <li key={post.id} className="mb-4">
                <Link href={`/blog/${post.id}`} className="text-[#97C93E] hover:underline">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default BlogPost;
