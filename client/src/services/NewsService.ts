import { AnyFn } from "utils/AnyFn";
import { UseQueryOptions } from "@tanstack/react-query";

import { News, NewsClass } from "./api/News";
import { INews, ISingleNew } from "model/INews";

class NewsServiceClass {
    protected _queryKeys = {
      all: () => ["news"],
      news: () => [...this._queryKeys.all(), "news"],
      new: () => [...this._queryKeys.all(), "new"],
    };

  protected apiClient;

  protected queryKey<T extends keyof typeof this._queryKeys>(
    key: T,
    ...args: Parameters<(typeof this._queryKeys)[T]>
  ): string[] {
    return (this._queryKeys[key] as AnyFn)(...args);
  }

  constructor(apiClient: NewsClass) {
    this.apiClient = apiClient;
  }

  getNews = async (): Promise<INews> => {
    const articlesResult = await this.apiClient.getArticles();

    return articlesResult.map(({ data }) => data).unwrap();
  };

  getNewsQuery(): UseQueryOptions<INews> {
    return {
      queryKey: this.queryKey("news"),
      queryFn: this.getNews,
    };
  }

  getNew = async (id: string): Promise<ISingleNew> => {
    const articleResult = await this.apiClient.getArticle(id);
    return articleResult.map(({ data }) => data).unwrap();
  };

  getNewQuery(id: string): UseQueryOptions<ISingleNew> {
    return {
      queryKey: this.queryKey("new"),
      queryFn: () => this.getNew(id),
    };
  }
}

export const NewsService = new NewsServiceClass(News);
