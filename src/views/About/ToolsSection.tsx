import React, { useRef } from "react";
import Slider from "react-slick";
import FadeInOnScroll from "../../components/FadeInOnScroll";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TOOLS } from "../../data/tools";
import ToolCard from "../../components/ToolCard";
import { FormattedMessage } from "react-intl";

const ToolsSection: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <section className="h-full md:h-[100vh] flex items-center mr-5 py-16 md:py-0">
      <div className="max-w-screen-xl mx-5 xl:mx-auto space-y-10 text-white w-full pr-5">
        <FadeInOnScroll>
          <p className="text-xl xs:text-2xl text-white font-medium ">
            <span className="text-[#075fe4] font-bold">/ </span>
            <FormattedMessage id="ABOUT.TOOLS_SECTION.TITLE" />
          </p>
        </FadeInOnScroll>
        <div className="flex justify-between items-center mr-5">
          <FadeInOnScroll>
            <p className="text-2xl md:text-3xl xl:text-5xl ">
              <FormattedMessage id="ABOUT.TOOLS_SECTION.SUBTITLE" />
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="hidden md:flex space-x-4 ">
              <button
                type="button"
                className="bg-[#2d343f] rounded-full flex justify-center items-center h-[60px] w-[60px] hover:bg-[#075fe4] hover:scale-110"
                onClick={goToPrev}
              >
                <MdOutlineChevronLeft className="text-4xl" />
              </button>
              <button
                type="button"
                className="bg-[#075fe4] rounded-full flex justify-center items-center h-[60px] w-[60px] hover:scale-110"
                onClick={goToNext}
              >
                <MdOutlineChevronRight className="text-4xl" />
              </button>
            </div>
          </FadeInOnScroll>
        </div>

        <FadeInOnScroll>
          <div className="max-w-min w-full relative ">
            <Slider ref={sliderRef} {...settings} className="">
              {TOOLS?.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </Slider>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="flex md:hidden space-x-4 justify-center ">
            <button
              type="button"
              className="bg-[#2d343f] rounded-full flex justify-center items-center h-[60px] w-[60px] hover:bg-[#075fe4] hover:scale-110"
              onClick={goToPrev}
            >
              <MdOutlineChevronLeft className="text-4xl" />
            </button>
            <button
              type="button"
              className="bg-[#075fe4] rounded-full flex justify-center items-center h-[60px] w-[60px] hover:scale-110"
              onClick={goToNext}
            >
              <MdOutlineChevronRight className="text-4xl" />
            </button>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
};

export default ToolsSection;
