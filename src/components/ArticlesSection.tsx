import { Lightbulb } from "lucide-react";
import React from "react";

interface ArticlesSectionProps {
  articles?: {
    title: string;
    url: string;
  }[];
}

const ArticlesSection: React.FC<ArticlesSectionProps> = ({ articles }) => {
  if (!articles?.length) {
    return null;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Articles</h2>

      <ul className="space-y-4">
        {articles.map((article, index) => (
          <li key={index}>
            <Lightbulb className="inline-block m-2" size={15} />
            <a
              href={article.url}
              className="text-black underline hover:no-underline"
            >
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesSection;
