import Image from "next/image";
import BlogTile from "./components/BlogTile";
import { Article } from "@prisma/client";

const articles: Article[] = [
  {
    id: 1,
    title: "My First Article",
    description: "This is my first article",
    body: "This is my first article",
    createdAt: new Date(),
    updatedAt: new Date(),
    isExpired: false,
  },
  {
    id: 2,
    title: "My Second Article",
    description: "This is my second article",
    body: "This is my second article",
    createdAt: new Date(),
    updatedAt: new Date(),
    isExpired: false,
  },
  {
    id: 3,
    title: "My Third Article",
    description: "This is my third article",
    body: "This is my third article",
    createdAt: new Date(),
    updatedAt: new Date(),
    isExpired: false,
  },
  {
    id: 4,
    title: "My Fourth Article",
    description: "This is my fourth article",
    body: "This is my fourth article",
    createdAt: new Date(),
    updatedAt: new Date(),
    isExpired: false,
  },
  {
    id: 5,
    title: "My Fifth Article",
    description: "This is my fifth article",
    body: "This is my fifth article",
    createdAt: new Date(),
    updatedAt: new Date(),
    isExpired: false,
  },
  {
    id: 6,
    title: "My Sixth Article",
    description: "This is my sixth article",
    body: "This is my sixth article",
    createdAt: new Date(),
    updatedAt: new Date(),
    isExpired: false,
  },
  {
    id: 7,
    title: "My Seventh Article",
    description:
      "This is my seventh article lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
    body: "This is my seventh article",
    createdAt: new Date(),
    updatedAt: new Date(),
    isExpired: false,
  },
];

export default function Home() {
  return (
    <div className="py-2">
      <h1 className="text-text">Blogger Home</h1>
      <section>
        <h2 className="py-2 text-xl text-text font-bold">Featured posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {articles.map((article) => (
            <BlogTile article={article} key={article.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
