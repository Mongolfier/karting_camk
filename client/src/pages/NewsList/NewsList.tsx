import { useQuery } from "@tanstack/react-query";
import { NewsService } from "services/NewsService";
import { NewPreview } from "features/NewPreview/NewPreview";

import cls from "./NewsList.module.css";
import { sortNews } from "utils/sortNews";

export const NewsList = () => {
  const {
    data: articles,
    isLoading,
    isPending,
  } = useQuery(NewsService.getNewsQuery());

  if (isPending) {
    return null;
  }

  if (isLoading) {
    return <>Загрузка...</>;
  }

  if (!articles || articles.data.length === 0) {
    return <>Статей ещё нет</>;
  }

  const sortedNews = sortNews(articles.data);

  return (
    <section>
      <ol className={cls.articleList}>
        {sortedNews.map((item) => {
          return <NewPreview key={item.id} article={item} />;
        })}
      </ol>
    </section>
  );
};
