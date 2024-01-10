import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import Button from "../../components/Form/Button";
import { projects } from "../../data/projects";
import { FormattedMessage, useIntl } from "react-intl";
import FadeInOnScroll from "../../components/FadeInOnScroll";
import { Helmet } from "react-helmet";

const Project: React.FC = () => {
  const intl = useIntl();

  const { projectId } = useParams<{ projectId: string }>();

  const project = projects.find((project) => project.id === +projectId!);

  return (
    <>
      <Helmet>
        <title>
          {project?.title}
          {intl.formatMessage({ id: "HELMET.PROJECT.TITLE" })}
        </title>
      </Helmet>
      <main className="py-10 md:py-20 space-y-20">
        <div className="flex flex-col md:flex-row justify-between items-end max-w-screen-xl mx-5 xl:mx-auto ">
          <div className="space-y-10">
            <div className="bg-white w-[15rem] h-2" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-medium max-w-[50rem] leading-10">
              {project?.title}
            </h1>
            <p className="text-[#e4e7ec] max-w-[55rem]">
              {project?.description}
            </p>
          </div>
          <div className="flex h-full md:justify-end md:items-end">
            <motion.a
              className="rounded-full w-14 h-14 lg:w-20 lg:h-20 bg-[#075fe4] mt-10 flex items-center justify-center hover:cursor-pointer"
              href="#about"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <FaAngleDown className="text-2xl lg:text-4xl animate-bounce text-white" />
            </motion.a>
          </div>
        </div>

        <FadeInOnScroll>
          <img
            className="w-full h-[80vh] object-center object-cover"
            src={project?.background_image}
            alt={project?.title}
          />
        </FadeInOnScroll>

        <div className="max-w-screen-xl mx-5 xl:mx-auto flex flex-col md:flex-row space-x-0 md:space-x-24 space-y-10 md:space-y-0">
          <div className="grid grid-cols-2 md:block gap-10 md:gap-0 space-y-0 md:space-y-10">
            <div className="space-y-4">
              <FadeInOnScroll>
                <p className="text-[#c3cad5] font-medium">
                  <FormattedMessage id="PROJECT.CLIENT" />
                </p>
              </FadeInOnScroll>
              <FadeInOnScroll>
                <p className="text-[20px] font-semibold text-white">
                  {project?.client}
                </p>
              </FadeInOnScroll>
            </div>
            <div className="space-y-4">
              <FadeInOnScroll>
                <p className="text-[#c3cad5] font-medium">
                  <FormattedMessage id="PROJECT.SERVICES" />
                </p>
              </FadeInOnScroll>
              <FadeInOnScroll>
                <p className="text-[20px] font-semibold text-white">
                  {project?.service}
                </p>
              </FadeInOnScroll>
            </div>
            <div className="space-y-4">
              <FadeInOnScroll>
                <p className="text-[#c3cad5] font-medium">
                  <FormattedMessage id="PROJECT.TECHNOLOGIES" />
                </p>
              </FadeInOnScroll>
              <FadeInOnScroll>
                <p className="text-[20px] font-semibold text-white">
                  {project?.stack.join(", ")}
                </p>
              </FadeInOnScroll>
            </div>
            {project?.website && (
              <div className="space-y-4">
                <FadeInOnScroll>
                  <p className="text-[#c3cad5] font-medium">
                    <FormattedMessage id="PROJECT.WEBSITE" />
                  </p>
                </FadeInOnScroll>
                <FadeInOnScroll>
                  <Button link={project?.website} target="_blank">
                    <FormattedMessage id="PROJECT.LIVE_PREVIEW" />
                  </Button>
                </FadeInOnScroll>
              </div>
            )}
            {project?.github && (
              <div className="space-y-4">
                <FadeInOnScroll>
                  <p className="text-[#c3cad5] font-medium">
                    <FormattedMessage id="PROJECT.GITHUB" />
                  </p>
                </FadeInOnScroll>
                <FadeInOnScroll>
                  <Button link={project?.github} target="_blank">
                    <FormattedMessage id="PROJECT.SOURCE_CODE" />
                  </Button>
                </FadeInOnScroll>
              </div>
            )}
          </div>
          <div id="about" className="space-y-10">
            <div className="space-y-6">
              <FadeInOnScroll>
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white">
                  <FormattedMessage id="PROJECT.ABOUT" />
                </h1>
              </FadeInOnScroll>
              <FadeInOnScroll>
                <p className="text-[#c3cad5] leading-loose text-base lg:text-lg xl:text-xl tracking-wide whitespace-pre-line font-light">
                  {project?.about}
                </p>
              </FadeInOnScroll>
            </div>

            <div className="space-y-6">
              <FadeInOnScroll>
                <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-white">
                  <FormattedMessage id="PROJECT.GOAL" />
                </h1>
              </FadeInOnScroll>
              <FadeInOnScroll>
                <p className="text-[#c3cad5] leading-loose text-base lg:text-lg xl:text-xl tracking-wide whitespace-pre-line font-light">
                  {project?.goal}
                </p>
              </FadeInOnScroll>
            </div>

            <div className="space-y-6">
              <FadeInOnScroll>
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white">
                  <FormattedMessage id="PROJECT.EXECUTION" />
                </h1>
              </FadeInOnScroll>
              <FadeInOnScroll>
                <p className="text-[#c3cad5] leading-loose text-base lg:text-lg xl:text-xl tracking-wide whitespace-pre-line font-light">
                  {project?.execution}
                </p>
              </FadeInOnScroll>
            </div>

            <div className="space-y-6">
              <FadeInOnScroll>
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white">
                  <FormattedMessage id="PROJECT.RESULTS" />
                </h1>
              </FadeInOnScroll>
              <FadeInOnScroll>
                <p className="text-[#c3cad5] leading-loose text-base lg:text-lg xl:text-xl tracking-wide whitespace-pre-line font-light">
                  {project?.results}
                </p>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Project;
