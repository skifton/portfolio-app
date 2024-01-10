import React from "react";
import { FormattedMessage } from "react-intl";
import Button from "../../components/Form/Button";
import FadeInOnScroll from "../../components/FadeInOnScroll";
import { ROUTES } from "../../routes/routes";

const SKILLS = [
  "React JS",
  "Redux",
  "TypeScript",
  "Gatsby JS",
  "Next JS",
  "Node JS",
  "Express JS",
  "HTML & CSS",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
  "Styled Components",
  "Headless UI",
  "MongoDB",
  "Firebase",
  "PostgreSQL",
  "GraphQL",
  "REST API",
  "React Testing Library",
  "Jest",
  "Cypress",
  "GitHub",
  "Webpack",
  "Babel",
  "Vite",
  "Figma",
];

const ExperienceSection: React.FC = () => {
  return (
    <section className="bg-[#2d343f66] py-16 md:py-32">
      <div className="max-w-screen-xl mx-5 xl:mx-auto space-y-10 text-white">
        <FadeInOnScroll>
          <p
            className="text-xl xs:text-2xl text-white font-medium "
            data-taos-offset="300"
          >
            <span className="text-[#075fe4] font-bold">/ </span>
            <FormattedMessage id="ABOUT.EXPERIENCE_SECTION.TITLE" />
          </p>
        </FadeInOnScroll>

        <div className="flex flex-col md:flex-row justify-between md:items-center pb-10 border-b border-gray-200/30 space-y-6 md:space-y-0">
          <FadeInOnScroll>
            <p className="text-white text-3xl md:text-5xl xl:text-6xl font-medium max-w-[50rem]">
              <FormattedMessage id="ABOUT.EXPERIENCE_SECTION.SUBTITLE" />
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <Button type="button" link={ROUTES.contact}>
              <FormattedMessage id="ABOUT.EXPERIENCE_SECTION.GET_IN_TOUCH" />
            </Button>
          </FadeInOnScroll>
        </div>

        <div className="mt-10 space-y-6">
          <FadeInOnScroll>
            <p className="text-[#c3cad5] text-xl">
              <FormattedMessage id="ABOUT.EXPERIENCE_SECTION.SKILL_SET" />
            </p>
          </FadeInOnScroll>
          <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 list-none gap-6">
            {SKILLS.map((skill, index) => (
              <FadeInOnScroll>
                <li
                  key={index}
                  className="text-white font-medium text-xl md:text-3xl"
                >
                  {skill}
                </li>
              </FadeInOnScroll>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
