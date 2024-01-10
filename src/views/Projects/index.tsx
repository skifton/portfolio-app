import React, { useEffect } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Helmet } from "react-helmet-async";
import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";
import FadeInOnScroll from "../../components/FadeInOnScroll";

const Projects: React.FC = () => {
  const intl = useIntl();

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Helmet>
        <title>{intl.formatMessage({ id: "HELMET.PROJECTS.TITLE" })}</title>
      </Helmet>
      <main className="max-w-screen-xl mx-5 xl:mx-auto py-8 md:py-16 flex flex-col items-center space-y-8 md:space-y-16">
        <FadeInOnScroll>
          <div className="w-[10rem] h-2 bg-white" />
        </FadeInOnScroll>

        <div className="space-y-3 md:space-y-6 text-center">
          <FadeInOnScroll>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-medium">
              <FormattedMessage id="PORTFOLIO" />
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className="text-[#e4e7ec]">
              <FormattedMessage id="PORTFOLIO.DESCRIPTION" />
            </p>
          </FadeInOnScroll>
        </div>

        <ul className="list-none grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
          {projects.map((project) => (
            <FadeInOnScroll>
              <ProjectCard key={project.id} project={project} />
            </FadeInOnScroll>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Projects;
