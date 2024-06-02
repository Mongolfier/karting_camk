import { INew } from "model/INews";

export const sortNews = (arr: INew[]) => {
  return arr.sort((a, b) => {
    return (
      Date.parse(b.attributes.publishDate) -
      Date.parse(a.attributes.publishDate)
    );
  });
};
