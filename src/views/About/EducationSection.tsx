import React from "react";
import FadeInOnScroll from "../../components/FadeInOnScroll";
import { FormattedMessage } from "react-intl";

const EducationSection: React.FC = () => {
  return (
    <section className="bg-[#2d343f66] py-16 md:py-32">
      <div className="max-w-screen-xl mx-5 xl:mx-auto space-y-10 text-white">
        <FadeInOnScroll>
          <p
            className="text-xl xs:text-2xl text-white font-medium "
            data-taos-offset="300"
          >
            <span className="text-[#075fe4] font-bold">/ </span>
            <FormattedMessage id="ABOUT.EDUCATION_SECTION.TITLE" />
          </p>
        </FadeInOnScroll>

        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between md:items-center pb-10 border-b border-gray-200/30">
          <FadeInOnScroll>
            <p className="text-white text-3xl md:text-5xl xl:text-6xl font-medium max-w-[30rem]">
              <FormattedMessage id="ABOUT.EDUCATION_SECTION.SUBTITLE" />
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className="text-[#c3cad5] max-w-[30rem]">
              <FormattedMessage id="ABOUT.EDUCATION_SECTION.DESCRIPTION" />
            </p>
          </FadeInOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 pt-10 space-y-8 md:space-y-0">
          <div className="md:pr-20 pb-10 md:pb-20 md:border-r border-b border-gray-200/30 space-y-4 md:space-y-8">
            <FadeInOnScroll>
              <div className="flex space-x-3">
                <p className="text-[#c3cad5] md:text-lg">
                  <FormattedMessage id="ABOUT.EDUCATION_SECTION.MCB.TITLE" />
                </p>
                <p className="text-lg md:text-xl text-[#075fe4]">/</p>
                <p className="text-[#c3cad5] md:text-lg">
                  <FormattedMessage id="ABOUT.EDUCATION_SECTION.MCB.END_DATE" />
                </p>
              </div>
            </FadeInOnScroll>
            <div className="space-y-4">
              <FadeInOnScroll>
                <p className="text-2xl md:text-3xl text-white font-semibold">
                  <FormattedMessage id="ABOUT.EDUCATION_SECTION.MCB.SPECIALIZATION" />
                </p>
              </FadeInOnScroll>
              <FadeInOnScroll>
                <p className="text-[#c3cad5] text-lg">
                  <FormattedMessage id="ABOUT.EDUCATION_SECTION.MCB.DESCRIPTION" />
                </p>
              </FadeInOnScroll>
            </div>
          </div>

          <div className="md:pl-20 pb-10 md:pb-20 border-b border-gray-200/30 md:border-none space-y-4 md:space-y-8">
            <FadeInOnScroll>
              <div className="flex space-x-3">
                <p className="text-[#c3cad5] md:text-lg">
                  <FormattedMessage id="ABOUT.EDUCATION_SECTION.UDEMY" />
                </p>
                <p className="text-lg md:text-xl text-[#075fe4]">/</p>
                <p className="text-[#c3cad5] md:text-lg">
                  <FormattedMessage id="ABOUT.EDUCATION_SECTION.UDEMY.END_DATE" />
                </p>
              </div>
            </FadeInOnScroll>
            <div className="space-y-4">
              <FadeInOnScroll>
                <p className="text-2xl md:text-3xl text-white font-semibold">
                  <FormattedMessage id="ABOUT.EDUCATION_SECTION.UDEMY.SPECIALIZATION" />
                </p>
              </FadeInOnScroll>
              <FadeInOnScroll>
                <p className="text-[#c3cad5] text-lg">
                  <FormattedMessage id="ABOUT.EDUCATION_SECTION.UDEMY.DESCRIPTION" />
                </p>
              </FadeInOnScroll>
            </div>
          </div>

          <div className="md:pr-20 pb-10 md:pb-0 md:pt-20 border-b border-gray-200/30 md:border-none space-y-4 md:space-y-8">
            <FadeInOnScroll>
              <div className="flex space-x-3">
                <p className="text-[#c3cad5] md:text-lg">
                  <FormattedMessage id="ABOUT.EDUCATION_SECTION.FREECODECAMP" />
                </p>
                <p className="text-lg md:text-xl text-[#075fe4]">/</p>
                <p className="text-[#c3cad5] md:text-lg">
                  <FormattedMessage id="ABOUT.EDUCATION_SECTION.FREECODECAMP.END_DATE" />
                </p>
              </div>
            </FadeInOnScroll>
            <div className="space-y-4">
              <FadeInOnScroll>
                <p className="text-2xl md:text-3xl text-white font-semibold">
                  <FormattedMessage id="ABOUT.EDUCATION_SECTION.FREECODECAMP.SPECIALIZATION" />
                </p>
              </FadeInOnScroll>
              <FadeInOnScroll>
                <p className="text-[#c3cad5] text-lg">
                  <FormattedMessage id="ABOUT.EDUCATION_SECTION.FREECODECAMP.DESCRIPTION" />
                </p>
              </FadeInOnScroll>
            </div>
          </div>

          <div className="md:pl-20 md:pt-20 md:border-t md:border-l border-gray-200/30 space-y-4 md:space-y-8">
            <FadeInOnScroll>
              <div className="flex space-x-3">
                <p className="text-[#c3cad5] md:text-lg">
                  <FormattedMessage id="ABOUT.EDUCATION_SECTION.UDEMY" />
                </p>
                <p className="text-lg md:text-xl text-[#075fe4]">/</p>
                <p className="text-[#c3cad5] md:text-lg">
                  <FormattedMessage id="ABOUT.EDUCATION_SECTION.UDEMY.SECOND.END_DATE" />
                </p>
              </div>
            </FadeInOnScroll>
            <div className="space-y-4">
              <FadeInOnScroll>
                <p className="text-2xl md:text-3xl text-white font-semibold">
                  <FormattedMessage id="ABOUT.EDUCATION_SECTION.UDEMY.SECOND.SPECIALIZATION" />
                </p>
              </FadeInOnScroll>
              <FadeInOnScroll>
                <p className="text-[#c3cad5] text-lg">
                  <FormattedMessage id="ABOUT.EDUCATION_SECTION.UDEMY.SECOND.DESCRIPTION" />
                </p>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
