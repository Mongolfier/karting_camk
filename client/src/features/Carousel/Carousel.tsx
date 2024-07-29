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
    <CarouselReact
      showStatus={false}
      showArrows={false}
      showThumbs={false}
      swipeable={true}
      infiniteLoop={true}
      emulateTouch={true}
      preventMovementUntilSwipeScrollTolerance={true}
      className={cls.carousel}
    >
      {slidesList.map((slide, index) => {
        const { description, image, title } = slide;
        return (
          <div className={cls.wrapper} key={index}>
            <h2 className={cls.title}>{title}</h2>
            <img
              className={cls.image}
              src={`${baseUrl}${image.attributes.url}`}
            />
            <p
              dangerouslySetInnerHTML={{ __html: description }}
              className={cls.description}
            />
          </div>
        );
      })}
    </CarouselReact>
  );
};
