interface IFormatImage {
  ext: string;
  height: number;
  mime: string;
  name: string;
  size: number;
  url: string;
  width: number;
}

export interface IIMage {
  id: number;
  attributes: {
    alternativeText: string | null;
    caption: string | null;
    createdAt: string;
    ext: string;
    formats: {
      large?: IFormatImage;
      medium: IFormatImage;
      small: IFormatImage;
      thumbnail: IFormatImage;
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
}
