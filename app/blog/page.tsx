"use client";

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap"; // Import GSAP
import Link from "next/link"; // Import Link from next/link

type Blog = {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
};

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  // Create a RefObject array to hold the references for each blog item
  const blogItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blog"); // Fetch from API route
        const data: Blog[] = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array ensures this runs once after initial render

  useEffect(() => {
    // GSAP animations for each blog item when they are loaded
    gsap.from(blogItemsRef.current, {
      opacity: 0,
      y: 50,
      stagger: 0.3, // Adds delay between animations for each item
      duration: 0.5,
      ease: "easeOut",
    });
  }, [blogs]); // Run the animation after blogs are fetched

  return (
    <div className="bg-[#002e02] min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header Section */}
        <div className="text-center text-white mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-lg text-gray-300">
            Insights, trends, and tips for developers and designers.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              ref={(el) => {
                blogItemsRef.current[index] = el; // GSAP references
              }}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              {/* Blog Image */}
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-[#97C93E] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#97C93E] uppercase font-bold">
                    {blog.category}
                  </span>
                  <span className="text-sm text-gray-400">{blog.date}</span>
                </div>
                <h2 className="text-lg font-semibold text-[#002e02] mb-4 group-hover:text-[#97C93E] transition-colors duration-300">
                  {blog.title}
                </h2>
                <p className="text-gray-600">{blog.description}</p>
                <Link
                  href={`/blog/${blog.id}`}
                  className="block mt-4 text-[#97C93E] font-bold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
