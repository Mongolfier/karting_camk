import { Fragment } from "react";
import { useQuery } from "@tanstack/react-query";
import { ArticlesService } from "services/ArticlesService";
import { ArticlePreview } from "features/ArticlePreview/ArticlePreview";

import cls from "./ArticleList.module.css";

export const ArticleList = () => {
  const { data: articles } = useQuery(ArticlesService.getArticlesQuery());

  if (!articles || articles.data.length === 0) {
    return <>Статей ещё нет</>;
  }

  return (
    <section>
      <ol className={cls.articleList}>
        {articles.data.map((item) => {
          return <ArticlePreview key={item.id} article={item} />;
        })}
      </ol>
    </section>
  );
};
