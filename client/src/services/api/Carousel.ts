import { AxiosHttpClient } from "services/http/AxiosHttpClient";
import { HttpClient } from "../http/HttpClient";
import { ICarousel } from "model/ICarousel";

export class CarouselClass {
  httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getCarousel() {
    return this.httpClient.get<ICarousel>("/api/main-carousels?populate=*");
  }
}

export const Carousel = new CarouselClass(AxiosHttpClient);
