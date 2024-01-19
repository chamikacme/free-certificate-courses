import { Article } from "@prisma/client";
import BlogTile from "./components/BlogTile";
import Tags from "./components/Tags";

const articles: Article[] = [
  {
    id: 1,
    title: "My First Article",
    description: "This is my first article",
    body: "This is my first article",
    createdAt: new Date(),
    updatedAt: new Date(),
    isExpired: false,
    image: "https://miro.medium.com/v2/0*whce6YoyadZjJcVx.jpg",
  },
  {
    id: 2,
    title: "My Second Article",
    description: "This is my second article",
    body: "This is my second article",
    createdAt: new Date(),
    updatedAt: new Date(),
    isExpired: false,
    image: "https://miro.medium.com/v2/0*whce6YoyadZjJcVx.jpg",
  },
  {
    id: 3,
    title: "My Third Article",
    description: "This is my third article",
    body: "This is my third article",
    createdAt: new Date(),
    updatedAt: new Date(),
    isExpired: false,
    image: "https://miro.medium.com/v2/0*whce6YoyadZjJcVx.jpg",
  },
  {
    id: 4,
    title: "My Fourth Article",
    description: "This is my fourth article",
    body: "This is my fourth article",
    createdAt: new Date(),
    updatedAt: new Date(),
    isExpired: false,
    image: "https://miro.medium.com/v2/0*whce6YoyadZjJcVx.jpg",
  },
  {
    id: 5,
    title: "My Fifth Article",
    description: "This is my fifth article",
    body: "This is my fifth article",
    createdAt: new Date(),
    updatedAt: new Date(),
    isExpired: false,
    image: "https://miro.medium.com/v2/0*whce6YoyadZjJcVx.jpg",
  },
  {
    id: 6,
    title: "My Sixth Article",
    description: "This is my sixth article",
    body: "This is my sixth article",
    createdAt: new Date(),
    updatedAt: new Date(),
    isExpired: false,
    image: "https://miro.medium.com/v2/0*whce6YoyadZjJcVx.jpg",
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
    image: "https://miro.medium.com/v2/0*whce6YoyadZjJcVx.jpg",
  },
  {
    id: 8,
    title: "My Eighth Article",
    description: "This is my eighth article",
    body: "This is my eighth article",
    createdAt: new Date(),
    updatedAt: new Date(),
    isExpired: false,
    image: "https://miro.medium.com/v2/0*whce6YoyadZjJcVx.jpg",
  },
  {
    id: 9,
    title: "My Ninth Article",
    description: "This is my ninth article",
    body: "This is my ninth article",
    createdAt: new Date(),
    updatedAt: new Date(),
    isExpired: false,
    image: "https://miro.medium.com/v2/0*whce6YoyadZjJcVx.jpg",
  },
  {
    id: 10,
    title: "My Tenth Article",
    description: "This is my tenth article",
    body: "This is my tenth article",
    createdAt: new Date(),
    updatedAt: new Date(),
    isExpired: false,
    image: "https://miro.medium.com/v2/0*whce6YoyadZjJcVx.jpg",
  },
  {
    id: 11,
    title: "My Eleventh Article",
    description: "This is my eleventh article",
    body: "This is my eleventh article",
    createdAt: new Date(),
    updatedAt: new Date(),
    isExpired: false,
    image: "https://miro.medium.com/v2/0*whce6YoyadZjJcVx.jpg",
  },
  {
    id: 12,
    title: "My Twelfth Article",
    description: "This is my twelfth article",
    body: "This is my twelfth article",
    createdAt: new Date(),
    updatedAt: new Date(),
    isExpired: false,
    image: "https://miro.medium.com/v2/0*whce6YoyadZjJcVx.jpg",
  },
];

export default function Home() {
  return (
    <div className="py-2">
      <h1 className="text-text">Blogger Home</h1>
      <section>
        <h2 className="py-2 text-xl text-text font-bold">Featured posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {articles.slice(0, 3).map((article) => (
            <BlogTile article={article} key={article.id} />
          ))}
          <BlogTile article={articles[3]} isLast={true} />
        </div>
      </section>
      <section className="mt-3">
        <h2 className="py-2 text-xl text-text font-bold">Latest posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {articles.slice(0, -1).map((article) => (
            <BlogTile article={article} key={article.id} />
          ))}

          {articles.slice(-1).map((article) => (
            <BlogTile article={article} key={article.id} isLast={true} />
          ))}
        </div>
      </section>

      <section className="my-3">
        <Tags />
      </section>
    </div>
  );
}
