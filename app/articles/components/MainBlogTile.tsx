import { Article } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface BlogTileProps {
  article: Article;
  key?: number;
}

const MainBlogTile = ({ article }: BlogTileProps) => {
  return (
    <div className="justify-self-stretch bg-slate-100 rounded-xl overflow-hidden border flex">
      <Image
        src="https://miro.medium.com/v2/0*whce6YoyadZjJcVx.jpg"
        alt="Article Cover"
        width={300}
        height={200}
        className="w-36 md:w-44 h-full object-cover"
      />

      <div className="px-4 py-2 h-14">
        <h3 className="text-primary font-semibold text-sm line-clamp-1 md:line-clamp-2">
          {article.title}
        </h3>
        <p className="line-clamp-1 md:line-clamp-2 overflow-hidden text-text text-sm">
          {article.description}
        </p>
        <Link
          href={`/articles/${article.id}`}
          className="text-blue-500 text-xs"
        >
          Continue reading..
        </Link>
      </div>
    </div>
  );
};

export default MainBlogTile;
