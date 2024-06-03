import { NewsList } from "pages/NewsList/NewsList";

import { useQuery } from "@tanstack/react-query";
import { CarouselService } from "services/CarouselService";
import { Carousel } from "features/Carousel/Carousel";
import { IParsedCarousel } from "model/ICarousel";

import cls from "./MainPage.module.css";

export const MainPage = () => {
  const { data: carouselData } = useQuery(CarouselService.getCarouselQuery());

  const parsedSlideList: IParsedCarousel[] | null = carouselData
    ? carouselData?.data.map((slide) => ({
        title: slide.attributes.title,
        description: slide.attributes.description,
        image: slide.attributes.image.data,
      }))
    : null;

  return (
    <>
      <div className={cls.cariuselWrapper}>
        <Carousel slidesList={parsedSlideList} />
      </div>
      <NewsList />
    </>
  );
};
