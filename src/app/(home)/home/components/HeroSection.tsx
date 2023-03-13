import { Admin, Slider } from "@components/carousel";
import PrimeSpot from "@components/carousel/slides/prime-spot";
import { BannerUser } from "@lib/interface/homepage/banner";

import React from "react";
import {useBanner} from "@root/src/utils/services/hooks/homepage";

interface Props {}

const Hero: React.FC<Props> = (props) => {
  const { banners, isLoading, isError } = useBanner();
  // console.log("banners", banners);
  // console.log("Error", isError);

  return (
    <section className="">
      <Slider>
        {isError || (isLoading && <PrimeSpot isPlaceholder />)}
        {
          //@ts-ignore
          banners && banners.max ? (
            <PrimeSpot data={banners} />
          ) : (
            <>
              {banners &&
                banners.users &&
                banners.users.map(
                  ({
                    image,
                    button_text,
                    button_link,
                    description,
                    title,
                    size,
                    id,
                  }: BannerUser) => (
                    <PrimeSpot
                      key={id}
                      data={{
                        id,
                        size,
                        title,
                        button_link,
                        button_text,
                        description,
                        image,
                      }}
                    />
                  )
                )}
              {banners && banners.admin && (
                <Admin
                  image={banners.admin.image}
                  description={banners.admin.description}
                  id={banners.admin.id}
                  title={banners.admin.title}
                  key={banners.admin.id}
                  video_link={banners.admin.video_link}
                  video_text={banners.admin.video_text}
                  button_link={banners.admin.button_link}
                  button_text={banners.admin.button_text}
                />
              )}
            </>
          )
        }
      </Slider>
    </section>
  );
};

export default Hero;
