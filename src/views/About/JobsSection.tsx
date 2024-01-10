import React from "react";
import FadeInOnScroll from "../../components/FadeInOnScroll";
import Button from "../../components/Form/Button";
import { EXPERIENCE } from "../../data/experience";
import { FormattedMessage } from "react-intl";

const JobsSection: React.FC = () => {
  return (
    <section className="max-w-screen-xl mx-5 xl:mx-auto space-y-10 text-white py-16 md:py-20">
      <FadeInOnScroll>
        <p
          className="text-xl xs:text-2xl text-white font-medium "
          data-taos-offset="300"
        >
          <span className="text-[#075fe4] font-bold">/ </span>
          <FormattedMessage id="ABOUT.JOB_SECTION.TITLE" />
        </p>
      </FadeInOnScroll>

      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between md:items-center pb-10 border-b border-gray-200/30">
        <FadeInOnScroll>
          <p className="text-white text-3xl md:text-5xl lg:text-6xl font-medium max-w-[50rem]">
            <FormattedMessage id="ABOUT.JOB_SECTION.SUBTITLE" />
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <Button type="button">
            <FormattedMessage id="ABOUT.EXPERIENCE_SECTION.GET_IN_TOUCH" />
          </Button>
        </FadeInOnScroll>
      </div>

      <ul className="list-none">
        {EXPERIENCE.map((job) => (
          <FadeInOnScroll>
            <li
              key={job.id}
              className="grid grid-cols-1 md:grid-cols-6 gap-x-0 md:gap-x-4 xl:gap-x-10 py-8 md:py-14 border-b border-gray-200/30 space-y-6 md:space-y-0"
            >
              <img src={job.logo} className="w-[5rem] col-span-1" />
              <div className="space-y-4 col-span-4">
                <p className="text-2xl lg:text-4xl font-semibold text-white">
                  {job.position}
                </p>
                <p className="text-[#c3cad5]">{job.description}</p>
              </div>
              <div className="col-span-1 flex space-x-2">
                <p className="text-[#c3cad5] text-md">{job.start_date}</p>
                <p className="text-xl text-[#075fe4]">/</p>
                <p className="text-[#c3cad5] text-md">{job.end_date}</p>
              </div>
            </li>
          </FadeInOnScroll>
        ))}
      </ul>
    </section>
  );
};

export default JobsSection;
