import React from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import FadeInOnScroll from "../../components/FadeInOnScroll";
import { FormattedMessage } from "react-intl";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-[#2d343f66] h-full md:h-[100vh] flex items-center py-16 md:py-0"
    >
      <div className="max-w-screen-xl mx-5 xl:mx-auto w-full space-y-10 text-white">
        <FadeInOnScroll>
          <p
            className="text-2xl text-white font-medium "
            data-taos-offset="300"
          >
            <span className="text-[#075fe4] font-bold">/ </span>
            <FormattedMessage id="MAIN.ABOUT_SECTION.TITLE" />
          </p>
        </FadeInOnScroll>
        <div className="flex flex-col md:flex-row gap-x-0 md:gap-x-24 xl:gap-x-32 gap-y-10 xl:gap-y-0">
          <div className="flex-1 space-y-10">
            <FadeInOnScroll>
              <p className="text-3xl md:text-5xl xl:text-6xl max-w-xl leading-tight ">
                <FormattedMessage id="MAIN.ABOUT_SECTION.SUBTITLE" />
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <p className="text-[#c3cad5] leading-normal ">
                <FormattedMessage id="MAIN.ABOUT_SECTION.DESCRIPTION" />
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <Link
                className="flex space-x-3 items-center text-[#c3cad5] text-lg xs:text-xl hover:text-white hover:border-white border-b border-[#c3cad5] pb-2 w-max "
                to="/about"
              >
                <p>
                  <FormattedMessage id="MORE_ABOUT_ME" />
                </p>
                <GoArrowRight className="text-xl" />
              </Link>
            </FadeInOnScroll>
          </div>
          <div className="flex-1 space-y-4">
            <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-10 md:space-x-16 xl:space-x-20">
              <FadeInOnScroll>
                <div className="space-x-2 flex items-center ">
                  <p className="text-[3rem] md:text-[5rem] xl:text-[7rem]">
                    <FormattedMessage id="2" />
                  </p>
                  <p className="max-w-full xs:max-w-[100px] text-xl leading-8">
                    <FormattedMessage id="MAIN.ABOUT_SECTION.EXPERIENCE" />
                  </p>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll>
                <div className="space-x-2 flex items-center ">
                  <p className="text-[3rem] md:text-[5rem] xl:text-[7rem]">
                    <FormattedMessage id="10" />
                  </p>
                  <p className="max-w-full xs:max-w-[100px] text-xl leading-8">
                    <FormattedMessage id="MAIN.ABOUT_SECTION.PROJECTS" />
                  </p>
                </div>
              </FadeInOnScroll>
            </div>
            <FadeInOnScroll>
              <p className="text-[#c3cad5] leading-normal ">
                <FormattedMessage id="MAIN.ABOUT_SECTION.EXPERIENCE_DESCRIPTION" />
              </p>
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
