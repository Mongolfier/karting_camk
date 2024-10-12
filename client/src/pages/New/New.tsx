import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import { NewsService } from "services/NewsService";

import cls from "./New.module.css";
import { BackButton } from "shared/ui/BackButton/BackButton";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { LastNews } from "features/LastNews/LastNews";
import { sortNews } from "utils/sortNews";

const New = () => {
  const { id } = useParams();
  const baseUrl = process.env.REACT_APP_API_HOST;

  const {
    data: rawNew,
    isPending,
    isLoading,
  } = useQuery(NewsService.getNewQuery(id!));

  const { data: newsList } = useQuery(NewsService.getNewsQuery());

  if (!newsList) {
    return null;
  }

  const sortedLastNews = sortNews(newsList!.data);
  const slicedNews = sortedLastNews.slice(0, 3);

  const news = rawNew?.data.attributes;

  if (!news) {
    return null;
  }

  const publishDate = format(new Date(news.publishDate), "dd.MM.yyyy HH:mm");

  const title = news.title;
  const imageUrl = news.banner.data
    ? `${baseUrl}${news.banner.data.attributes.formats.medium.url}`
    : undefined;

  if (isPending) {
    return null;
  }

  if (isLoading) {
    // TODO: лоадер
    return <>Загрузка...</>;
  }

  return (
    <section className={cls.new}>
      <BackButton to="/" className={cls.backButton}>
        Все новости
      </BackButton>

      <div className={cls.newContent}>
        <div>
          <h2 className={cls.title}>{title}</h2>
          <p className={cls.publishDate}>{publishDate}</p>
          {imageUrl && (
            <img
              className={cls.preview}
              src={imageUrl}
              alt={`Превью статьи ${title}`}
            />
          )}

          <div className={cls.content}>
            <BlocksRenderer content={news.content} />
          </div>
        </div>

        <div className={cls.lastNews}>
          {slicedNews && <LastNews news={slicedNews} />}
        </div>
      </div>
    </section>
  );
};

export default New;