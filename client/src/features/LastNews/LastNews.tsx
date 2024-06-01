import { FC } from "react";
import { format } from "date-fns";

import { INew } from "model/INews";

import cls from "./LastNews.module.css";

export interface LastNewsProps {
  news: INew[];
}
export const LastNews: FC<LastNewsProps> = (props) => {
  const { news } = props;

  return (
    <section className={cls.lastNews}>
      <h2 className={cls.title}>Последние новости</h2>
      <table className={cls.table}>
        {news.map((item) => {
          const publishDate = format(
            new Date(item.attributes.publishDate),
            "dd.MM.yyyy"
          );
          const publichTime = format(
            new Date(item.attributes.publishDate),
            "hh:mm"
          );
          return (
            <tr key={item.id} className={cls.row}>
              <td className={cls.publishDate}>
                {publishDate}
                <span className={cls.publishTime}>{publichTime}</span>
              </td>
              <td className={cls.newTitle}>
                <a className={cls.link} href={`/article/${item.id}`}>{item.attributes.title}</a>
              </td>
            </tr>
          );
        })}
      </table>
    </section>
  );
};
