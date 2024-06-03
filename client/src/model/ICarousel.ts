import { IIMage } from "./IIMage";

export interface ICarousel {
  data: {
    attributes: {
      title: string;
      description: string;
      image: {
        data: IIMage;
      };
    };
    id: number;
  }[];
  meta: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface IParsedCarousel {
  title: string;
  description: string;
  image: IIMage;
}
