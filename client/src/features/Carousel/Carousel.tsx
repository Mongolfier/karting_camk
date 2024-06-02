import { FC } from "react";
import { Carousel as CarouselReact } from "react-responsive-carousel";
import { IParsedCarousel } from "model/ICarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import cls from "./Carousel.module.css";

export interface CarouselProps {
  slidesList: IParsedCarousel[] | null;
}
export const Carousel: FC<CarouselProps> = (props) => {
  const { slidesList } = props;

  const baseUrl = process.env.REACT_APP_API_HOST;

  if (!slidesList) {
    return null;
  }

  return (
    <CarouselReact>
      {slidesList.map((slide) => {
        const { description, image, title } = slide;

        console.log(image.attributes);
        
        return (
            <div>
                <h2>{title}</h2>
                <img src={`${baseUrl}${image.attributes.url}`} />
                <p>{description}</p>
            </div>);
      })}
    </CarouselReact>
  );
};
