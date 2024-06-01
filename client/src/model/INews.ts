import { RootNode } from "@strapi/blocks-react-renderer/dist/BlocksRenderer";

interface IFaromatImage {
  ext: string;
  height: number;
  mime: string;
  name: string;
  size: number;
  url: string;
  width: number;
}

export interface INew {
  attributes: {
    title: string;
    banner: {
      data: {
        id: number;
        attributes: {
          alternativeText: string | null;
          caption: string | null;
          createdAt: string;
          ext: string;
          formats: {
            large?: IFaromatImage;
            medium: IFaromatImage;
            small: IFaromatImage;
            thumbnail: IFaromatImage;
          };
          hash: string;
          height: number;
          mime: string;
          name: string;
          previewUrl: unknown | null;
          size: number;
          updatedAt: string;
          url: string;
          width: string;
        };
      } | null;
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
