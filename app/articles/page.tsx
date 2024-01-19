import { Article } from "@prisma/client";
import Tags from "../components/Tags";
import MainBlogTile from "./components/MainBlogTile";
import Pagination from "../components/Pagination";

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

const ArticlesPage = () => {
  return (
    <div className="py-2 flex gap-4">
      <section className="lg:w-3/4">
        <h1 className="text-text text-xl font-bold">All articles</h1>
        <div className="flex flex-col gap-2 mt-2 mb-4">
          {articles.map((article) => (
            <MainBlogTile article={article} key={article.id} />
          ))}
        </div>
        <Pagination />
      </section>
      <aside className="grow border rounded-lg p-5 mt-2 lg:w-1/4 hidden lg:block">
        <Tags />
      </aside>
    </div>
  );
};

export default ArticlesPage;
