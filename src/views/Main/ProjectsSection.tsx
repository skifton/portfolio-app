import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";
import FadeInOnScroll from "../../components/FadeInOnScroll";
import { ROUTES } from "../../routes/routes";
import { FormattedMessage } from "react-intl";

const ProjectsSection: React.FC = () => {
  return (
    <section id="about" className="bg-[#2d343f66] py-20 flex items-center">
      <div className="max-w-screen-xl mx-5 xl:mx-auto w-full space-y-10 text-white">
        <FadeInOnScroll>
          <p className="text-2xl text-white font-medium ">
            <span className="text-[#075fe4] font-bold">/ </span>
            <FormattedMessage id="MAIN.PROJECTS_SECTION.TITLE" />
          </p>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-8 gap-y-10">
          {/* flex flex-col md:flex-row gap-x-0 md:gap-x-24 xl:gap-x-32 gap-y-10 xl:gap-y-0 */}
          <div className="flex-1 space-y-10">
            <FadeInOnScroll>
              <p className="text-3xl md:text-5xl xl:text-6xl max-w-xl leading-tight ">
                <FormattedMessage id="MAIN.PROJECTS_SECTION.SUBTITLE" />
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll>
              <Link
                className="flex space-x-3 items-center text-[#c3cad5] text-lg xs:text-xl hover:text-white hover:border-white border-b border-[#c3cad5] pb-2 w-max "
                to={ROUTES.projects}
              >
                <p>
                  <FormattedMessage id="BROWSE_ALL_PROJECTS" />
                </p>
                <GoArrowRight className="text-xl" />
              </Link>
            </FadeInOnScroll>
          </div>
          <div className="flex-2 grid col-span-1 row-span-5 ">
            <FadeInOnScroll>
              <ProjectCard project={projects[0]} />
            </FadeInOnScroll>
          </div>
          <div className="grid col-span-1 row-span-5 ">
            <FadeInOnScroll>
              <ProjectCard project={projects[1]} />
            </FadeInOnScroll>
          </div>
          <div className="grid col-span-1 row-span-5 ">
            <FadeInOnScroll>
              <ProjectCard project={projects[2]} />
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
