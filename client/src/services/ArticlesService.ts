import { AnyFn } from "utils/AnyFn";
import { UseQueryOptions } from "@tanstack/react-query";
import { IArticles } from "model/IArticles";
import { Articles, ArticlesClass } from "./api/Articles";

class ArticlesServiceClass {
  protected _queryKeys = {
    all: () => ["articles"],
    articles: () => [...this._queryKeys.all(), "article"],
  };

  protected apiClient;

  protected queryKey<T extends keyof typeof this._queryKeys>(
    key: T,
    ...args: Parameters<(typeof this._queryKeys)[T]>
  ): string[] {
    return (this._queryKeys[key] as AnyFn)(...args);
  }

  constructor(apiClient: ArticlesClass) {
    this.apiClient = apiClient;
  }

  getArticles = async (): Promise<IArticles> => {
    const articlesResult = await this.apiClient.getArticles();

    return articlesResult.map(({ data }) => data).unwrap();
  };

  getArticlesQuery(): UseQueryOptions<IArticles> {
    return {
      queryKey: this.queryKey("articles"),
      queryFn: this.getArticles,
    };
  }
}

export const ArticlesService = new ArticlesServiceClass(Articles);
