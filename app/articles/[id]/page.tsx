import { Article } from "@prisma/client";
import React from "react";
import Image from "next/image";
import Tags from "@/app/components/Tags";

const article: Article = {
  id: 1,
  title: "My First Article",
  description: "This is my first article",
  image: "https://miro.medium.com/v2/0*whce6YoyadZjJcVx.jpg",
  body: `


<article>

  <p>Next.js is a powerful React framework that simplifies the process of building modern, server-rendered React applications. It provides a streamlined development experience with features like automatic code splitting, server-side rendering, and easy deployment.</p>

  <section>
	  <h2>Getting Started with Next.js</h2>
	  <p>If you're new to Next.js, the first step is to set up a new project. You can use the following command to create a new Next.js app:</p>
	  <pre><code>npx create-next-app my-next-app</code></pre>
	  <p>This command will set up a new Next.js project with a default folder structure and configuration. You can then navigate into the project directory and start the development server:</p>
	  <pre><code>cd my-next-app
npm run dev</code></pre>
  </section>

  <section>
	  <h2>Pages and Routing</h2>
	  <p>One of the key features of Next.js is its automatic routing system. Any component placed in the "pages" directory becomes a route in your application. For example, creating a file named "about.js" inside "pages" will automatically generate an "/about" route.</p>
	  <p>Routing is handled on the client side, but Next.js also supports server-side rendering, providing better performance and SEO optimization.</p>
  </section>

  <section>
	  <h2>API Routes</h2>
	  <p>Next.js allows you to create API routes easily. Simply create a folder named "pages/api" and add your API routes as individual files. These files will be accessible under the "/api" route in your application.</p>
	  <p>API routes can be used to handle server-side logic, making it convenient to fetch data or perform server-side operations.</p>
  </section>

  <section>
	  <h2>Deployment</h2>
	  <p>Deploying a Next.js app is straightforward. You can choose from various hosting platforms like Vercel, Netlify, or deploy it on your own server. The framework provides a seamless deployment experience, allowing you to focus on building your application rather than dealing with complex deployment processes.</p>
  </section>

</article>

<footer>
  <p>Author: Your Name</p>
  <p>Contact: your.email@example.com</p>
</footer>

  `,
  createdAt: new Date(),
  updatedAt: new Date(),
  isExpired: false,
};

const ArticlePage = () => {
  return (
    <div className="py-2 flex gap-4">
      <section className="lg:w-3/4">
        <h1 className="text-text text-5xl font-bold">{article.title}</h1>
        <p className="text-text text-sm">{article.createdAt.toDateString()}</p>
        <Image
          src={article.image!}
          alt="Article Cover"
          width={500}
          height={200}
          className="w-full object-cover my-2"
        />
        <div
          className="flex flex-col gap-2 mt-2 mb-4"
          dangerouslySetInnerHTML={{ __html: article.body! }}
        />{" "}
      </section>
      <aside className="grow border rounded-lg p-5 mt-2 lg:w-1/4 hidden lg:block">
		<Tags />
	  </aside>
    </div>
  );
};

export default ArticlePage;
