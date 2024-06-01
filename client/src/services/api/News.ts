import { AxiosHttpClient } from "services/http/AxiosHttpClient";
import { HttpClient } from "../http/HttpClient";
import { INews, ISingleNew } from "model/INews";

export class NewsClass {
  httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getArticles() {
    return this.httpClient.get<INews>("/api/articles?populate=*");
  }

  getArticle(id: string) {
    return this.httpClient.get<ISingleNew>(
      `/api/articles/${id}?populate=*`
    );
  }
}

export const News = new NewsClass(AxiosHttpClient);
