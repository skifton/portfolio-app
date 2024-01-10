import React from "react";
import MeetSection from "./MeetSection";
import ExperienceSection from "./ExperienceSection";
import JobsSection from "./JobsSection";
import EducationSection from "./EducationSection";
import ToolsSection from "./ToolsSection";
import { Helmet } from "react-helmet-async";
import { useIntl } from "react-intl";

const About: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>{intl.formatMessage({ id: "HELMET.ABOUT.TITLE" })}</title>
      </Helmet>
      <main>
        <MeetSection />
        <ExperienceSection />
        <JobsSection />
        <EducationSection />
        <ToolsSection />
      </main>
    </>
  );
};

export default About;
