import { FC } from "react";
import { format } from "date-fns";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { IArticle } from "model/IArticles";
import MultiClamp from "react-multi-clamp";

import cls from "./ArticlePreview.module.css";
import { RoutePath } from "shared/config/routeConfig";

export interface ArticlePreviewProps {
  article: IArticle;
}

export const ArticlePreview: FC<ArticlePreviewProps> = (props) => {
  const { article } = props;
  const baseUrl = process.env.REACT_APP_API_HOST;

  const publishDate = format(
    new Date(article.attributes.publishDate),
    "dd.MM.yyyy hh:mm"
  );
  const imageUrl = article.attributes.banner.data
    ? `${baseUrl}${article.attributes.banner.data.attributes.formats.medium.url}`
    : undefined;
  const title = article.attributes.title;
  const articleLink = RoutePath.article.replace(':id', String(article.id));

  return (
    <li className={cls.articlePreview}>
      {imageUrl && (
        <a href={articleLink}>
          <img
            alt={`Превью статьи '${title}'`}
            src={imageUrl}
            className={cls.preview}
          />
        </a>
      )}

      <div className={cls.contentWrapper}>
        <p className={cls.publishDate}>{publishDate}</p>
        <MultiClamp ellipsis="..." clamp={2}>
          <a href={articleLink} className={cls.articleLink}>
            {title}
          </a>
        </MultiClamp>

        <div className={cls.content}>
          <MultiClamp ellipsis="..." clamp={3}>
            <BlocksRenderer content={article.attributes.content} />
          </MultiClamp>
        </div>
      </div>
    </li>
  );
};
