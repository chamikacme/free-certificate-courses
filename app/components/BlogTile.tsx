import { Article } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface BlogTileProps {
  article: Article;
  key?: number;
  isLast?: boolean;
}

const BlogTile = ({ article, isLast = false }: BlogTileProps) => {
  return (
    <div className="justify-self-stretch bg-slate-100 rounded-xl overflow-hidden border backdrop-blur-md">
      <Image
        src="https://miro.medium.com/v2/0*whce6YoyadZjJcVx.jpg"
        alt="Article Cover"
        width={300}
        height={200}
        className="w-full h-28 object-cover"
      />

      <div className="pt-1 px-4 pb-2">
        <h3 className="text-primary font-semibold text-sm">{article.title}</h3>
        <p className="line-clamp-2 overflow-hidden text-text text-sm">
          {article.description}
        </p>
        <Link
          href={`/articles/${article.id}`}
          className="text-blue-500 text-xs"
        >
          Continue reading..
        </Link>

        {isLast && (
          <div className="absolute inset-0 bg-body bg-opacity-5 backdrop-blur-sm flex items-center justify-center">
            <Link
              href={"/articles"}
              className="text-white px-4 py-2 rounded-full bg-primary hover:bg-darkmode-secondary"
            >
              See More Posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogTile;
