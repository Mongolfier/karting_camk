import { FC } from "react";
import { format } from "date-fns";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { INew } from "model/INews";
import MultiClamp from "react-multi-clamp";
import { RoutePath } from "shared/config/routeConfig/routes";

import cls from "./NewPreview.module.css";
import { ReactComponent as EmptyImage } from "shared/assets/photo_placeholder.svg";

export interface ArticlePreviewProps {
  article: INew;
}

export const NewPreview: FC<ArticlePreviewProps> = (props) => {
  const { article } = props;
  const baseUrl = process.env.REACT_APP_API_HOST;

  const publishDate = format(
    new Date(article.attributes.publishDate),
    "dd.MM.yyyy HH:mm"
  );

  const imageUrl = article.attributes.banner.data
    ? `${baseUrl}${article.attributes.banner.data.attributes.formats.medium.url}`
    : undefined;
  const title = article.attributes.title;
  const articleLink = RoutePath.article.replace(":id", String(article.id));

  return (
    <li className={cls.articlePreview}>
      <a href={articleLink}>
        {imageUrl ? (
          <img
            alt={`Превью статьи '${title}'`}
            src={imageUrl}
            className={cls.preview}
          />
        ) : (
          <EmptyImage className={cls.preview} />
        )}
      </a>

      <div className={cls.contentWrapper}>
        <p className={cls.publishDate}>{publishDate}</p>
        <a href={articleLink} className={cls.articleLink}>
          <MultiClamp ellipsis="..." clamp={2}>
            {title}
          </MultiClamp>
        </a>

        <div className={cls.content}>
          <MultiClamp ellipsis="..." clamp={3}>
            <BlocksRenderer content={article.attributes.content} />
          </MultiClamp>
        </div>
      </div>
    </li>
  );
};
