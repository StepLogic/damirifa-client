import GalleryThumbnail from "@components/cards/obituary-page-cards/premium/gallery-thumbnail";
import { Image } from "@components/ui/common";

import { Splide, SplideTrack } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import cn from "classnames";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import s from "./index.module.css";
import {useModalContext} from "@root/src/utils/contexts/ModalContext";

interface Props {
  galleryImages?: string[];
}

const HighlightPhotos: React.FC<Props> = (props) => {
  const { galleryImages = [] } = props;
  const [activeId, setActiveId] = useState(0);
  const modal = useModalContext();

  useEffect(() => {
    modal.setModalType("premium");
  }, [modal]);

  const SliderContainer = () => {
    let element: any;
    let thumbnail: any;
    const ref = async (e: any) => {
      element = e;
    };
    useEffect(() => {
      // console.log("Active", activeId, "Ref", element);
      if (element && thumbnail && thumbnail.splide) {
        console.log("Active", thumbnail.splide);
        element.sync(thumbnail.splide);
      }
      element && element.splide.go(activeId);
    }, [element, thumbnail]);
    useEffect(() => {
      if (element && thumbnail && thumbnail.splide) {
        console.log("Active", thumbnail.splide);
        element.sync(thumbnail.splide);
      }
    }, []);
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-content my-auto",
          s.sliderContainer
        )}
      >
        <Image
          src={galleryImages[activeId]}
          alt={galleryImages[activeId]}
          key={uuid()}
          className={s.galleryImage}
          objectFit="contain"
          objectPosition={"center"}
        />
      </div>
    );
  };
  return (
    <>
      <div className={s.root}>
        <Splide
          className={"w-full"}
          hasTrack={false}
          options={{
            type: "slide",
            arrows: true,
            pagination: true,
            perPage: 6,
            // direction: "rtl",
            classes: {
              pagination: cn("flex flex-row", s.pagination),
            },
            autoScroll: {
              pauseOnHover: true,
              pauseOnFocus: true,
              // rewind: true,
              speed: 1,
            },
            breakpoints: {
              500: {
                perPage: 1,
              },
              800: {
                perPage: 2,
              },
              1000: {
                perPage: 3,
              },
              1500: {
                perPage: 4,
              },
              1800: {
                perPage: 4,
              },
              3000: {
                perPage: 5,
              },
            },
          }}
          extensions={{ AutoScroll }}
        >
          <div className={cn("w-fit mx-auto ", s.container)}>
            <SplideTrack>
              {galleryImages.map((image: string, index: number) => (
                <GalleryThumbnail
                  src={image}
                  alt={image}
                  key={uuid()}
                  onClick={() => {
                    setActiveId(index);
                    modal.openModal(<SliderContainer />, "", false);
                  }}
                  className={"mx-auto"}
                />
              ))}
            </SplideTrack>
          </div>
        </Splide>
      </div>
    </>
  );
};

export default HighlightPhotos;
