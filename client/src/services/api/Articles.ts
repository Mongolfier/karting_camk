import { AxiosHttpClient } from "services/http/AxiosHttpClient";
import { HttpClient } from "../http/HttpClient";
import { IArticles } from "model/IArticles";

export class ArticlesClass {
  httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getArticles() {
    return this.httpClient.get<IArticles>("/api/articles?populate=*");
  }
}

export const Articles = new ArticlesClass(AxiosHttpClient);
