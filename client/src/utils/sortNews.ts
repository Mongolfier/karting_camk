import { INew } from "model/INews";

export const sortNews = (arr: INew[]) => {
  arr.forEach(item => console.log(Date.parse(item.attributes.publishDate)))

  return arr.sort((a, b) => {
    return (
      Date.parse(b.attributes.publishDate) -
      Date.parse(a.attributes.publishDate)
    );
  });
};
