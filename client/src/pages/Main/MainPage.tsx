import { NewsList } from "pages/NewsList/NewsList";

import { useQuery } from "@tanstack/react-query";
import { CarouselService } from "services/CarouselService";

import cls from "./MainPage.module.css";
import { Carousel } from "features/Carousel/Carousel";
import { IParsedCarousel } from "model/ICarousel";

export const MainPage = () => {
  const { data: carouselData } = useQuery(CarouselService.getCarouselQuery());

  console.log(carouselData)

  const parsedSlideList: IParsedCarousel[] | null = carouselData ? carouselData?.data.map(
    (slide) => ({
      title: slide.attributes.title,
      description: slide.attributes.description,
      image: slide.attributes.image.data,
    })
  ) : null;

  return (
    <>
      <Carousel slidesList={parsedSlideList} />
      <NewsList />
    </>
  );
};
