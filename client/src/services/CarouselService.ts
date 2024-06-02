import { UseQueryOptions } from "@tanstack/react-query";
import { AnyFn } from "../utils/AnyFn";
import { Carousel, CarouselClass } from "./api/Carousel";
import { ICarousel } from "model/ICarousel";

class CarouselServiceClass {
  protected _queryKeys = {
    all: () => ["carousels"],
    carousel: () => [...this._queryKeys.all(), "carousel"],
  };
  protected apiClient;

  protected queryKey<T extends keyof typeof this._queryKeys>(
    key: T,
    ...args: Parameters<(typeof this._queryKeys)[T]>
  ): string[] {
    return (this._queryKeys[key] as AnyFn)(...args);
  }

  constructor(apiClient: CarouselClass) {
    this.apiClient = apiClient;
  }

  getCarousel = async (): Promise<ICarousel> => {
    const carouselResult = await this.apiClient.getCarousel();

    return carouselResult.map(({ data }) => data).unwrap();
  };

  getCarouselQuery(): UseQueryOptions<ICarousel> {
    return {
      queryKey: this.queryKey("carousel"),
      queryFn: this.getCarousel,
    };
  }
}

export const CarouselService = new CarouselServiceClass(Carousel);
