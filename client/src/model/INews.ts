import { RootNode } from "@strapi/blocks-react-renderer/dist/BlocksRenderer";
import { IIMage } from "./IIMage";

export interface INew {
  attributes: {
    title: string;
    banner: {
      data: IIMage | null;
    };
    content: RootNode[];
    publishDate: string;
    preview: File;
  };
  id: number;
}

export interface INews {
  data: INew[];
  meta: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface ISingleNew {
  data: INew;
  meta: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
