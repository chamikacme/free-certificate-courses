import { Article } from "@prisma/client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const BlogTile = ({ article }: { article: Article; key: number }) => {
  return (
    <div className="justify-self-stretch bg-slate-100 rounded-xl overflow-hidden border">
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
      </div>
    </div>
  );
};

export default BlogTile;
