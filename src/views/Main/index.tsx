import React from "react";
import WelcomeSection from "./WelcomeSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import { Helmet } from "react-helmet-async";
import { useIntl } from "react-intl";

const Main: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>
          {intl.formatMessage({ id: "HELMET.MAIN.TITLE" }).toString()}
        </title>
      </Helmet>
      <main>
        <WelcomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Main;
