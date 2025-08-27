---
title: "Building Nextjs Blog From Markdown In Docs Folder"
description: "Building a Next.js blog from Markdown files stored in a docs/ folder involves several key steps:"
date: "2025-08-27"
author: "K2AiHub Development Team"
category: "Tài Liệu"
tags: ["K2AiHub", "trí tuệ nhân tạo", "module giáo dục"]
featured: false
readingTime: "2 phút đọc"
---

Building a Next.js blog from Markdown files stored in a docs/ folder involves several key steps:
Project Setup:
Initialize a Next.js project if you haven't already.
Create a docs/ folder in your project's root directory to house your Markdown blog posts.
Markdown File Structure:
Inside docs/, create individual Markdown files (e.g., my-first-post.md, another-article.md) for each blog post.
Include "frontmatter" (YAML-formatted metadata at the top of the file) for each post, such as title, date, author, description, etc. This metadata is essential for displaying post lists and individual post details.
Code

    ---
    title: My First Blog Post
    date: 2025-08-24
    author: K2AI
    description: A brief summary of my first blog post.
    ---

    # Welcome to my blog!

    This is the content of my first blog post, written in Markdown.

Data Fetching and Parsing:
Use Node.js's fs module to read the Markdown files from the docs/ folder in your Next.js pages (e.g., pages/index.js for a list of posts, or pages/blog/[slug].js for individual posts).
Utilize a library like gray-matter to parse the frontmatter and content from the Markdown files.
For rendering the Markdown content as HTML, use a Markdown parser library like remark, markdown-it, or react-markdown.
Dynamic Routing for Individual Posts:
Create a dynamic route in your pages/ directory, for example, pages/blog/[slug].js.
Use getStaticPaths to generate the paths for each blog post based on the filenames in your docs/ folder. This function tells Next.js which pages to pre-render at build time.
Use getStaticProps within pages/blog/[slug].js to fetch the content and frontmatter for the specific blog post based on the slug parameter.
Displaying Blog Posts:
On your main blog page (e.g., pages/index.js), fetch all blog post metadata using getStaticProps and display a list of posts (e.g., titles, dates, descriptions).
On the individual blog post page (pages/blog/[slug].js), render the parsed Markdown content and display the frontmatter details.
By following these steps, you can effectively run a Next.js blog powered by Markdown files stored in your docs/ folder, leveraging Next.js's static site generation capabilities for performance and ease of content management.
