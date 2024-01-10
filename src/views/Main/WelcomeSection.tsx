import React from "react";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";
import Avatar from "../../assets/simanenkau.png";
import { FaAngleDown } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { SOCIALS } from "../../data/socials";
import { ROUTES } from "../../routes/routes";

const WelcomeSection: React.FC = () => {
  return (
    <section className="relative flex items-start lg:items-center justify-center space-y-10 h-[86rem] xs:h-[120vh] md:h-[80vh] lg:h-[88vh] text-white max-w-screen-xl mx-5 xl:mx-auto">
      <motion.img
        className="w-[60%] lg:w-max lg:h-[88vh] absolute z-[-1] lg:bottom-auto bottom-0 lg:left-auto left-auto md:right-auto right-auto md:left-0"
        src={Avatar}
        alt="Anton Simanenkau"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <div className="w-full flex flex-col md:flex-row justify-between space-y-10 md:space-y-0">
        <div className="space-y-10">
          <motion.div
            className="w-44 bg-white h-3"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <div className="space-y-6">
            <motion.h1
              className="text-4xl lg:text-6xl font-[roboto] font-medium max-w-md lg:max-w-lg leading-normal"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <FormattedMessage id="MAIN.HEADER" />
            </motion.h1>
            <motion.p
              className="text-[#c3cad5] text-xl"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <FormattedMessage id="MAIN.SUBHEADER" />
            </motion.p>
          </div>
          <div>
            <motion.a
              className="rounded-full w-20 h-20 lg:w-32 lg:h-32 bg-[#075fe4] mt-10 flex items-center justify-center hover:cursor-pointer"
              href="#about"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <FaAngleDown className="text-2xl lg:text-5xl animate-bounce" />
            </motion.a>
          </div>
        </div>
        <div className="space-y-16">
          <div className="space-y-10 xs:space-y-0 md:space-y-16 block xs:flex md:block space-x-0 xs:space-x-5 md:space-x-0">
            <motion.div
              className="space-y-8 pb-16 border-b border-[#c3cad5]/30"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-xl">
                <FormattedMessage id="MAIN.ABOUT_SECTION.TITLE" />
              </h2>
              <p className="text-[#c3cad5] max-w-sm">
                <FormattedMessage id="MAIN.WELCOME_SECTION.ABOUT_ME.DESCRIPTION" />
              </p>
              <Link
                className="flex space-x-3 items-center text-[#c3cad5] hover:text-white hover:border-white border-b border-[#c3cad5] pb-2 w-max"
                to="/about"
              >
                <p>
                  <FormattedMessage id="MAIN.WELCOME_SECTION.LEARN_MORE" />
                </p>
                <GoArrowRight className="text-xl" />
              </Link>
            </motion.div>

            <motion.div
              className="space-y-8 pb-16 border-b border-[#c3cad5]/30"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-xl">
                <FormattedMessage id="MAIN.WELCOME_SECTION.MY_WORK" />
              </h2>
              <p className="text-[#c3cad5] max-w-sm">
                <FormattedMessage id="MAIN.WELCOME_SECTION.MY_WORK.DESCRIPTION" />
              </p>
              <Link
                className="flex space-x-3 items-center text-[#c3cad5] hover:text-white hover:border-white border-b border-[#c3cad5] pb-2 w-max"
                to={ROUTES.projects}
              >
                <p>
                  <FormattedMessage id="MAIN.WELCOME_SECTION.MY_WORK.BROWSE_PORTFOLIO" />
                </p>
                <GoArrowRight className="text-xl" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-xl">
              <FormattedMessage id="MAIN.WELCOME_SECTION.MY_WORK.FOLLOW_ME" />
            </h2>
            <ul className="list-none flex space-x-6 max-w-sm">
              {SOCIALS.map((social) => (
                <li key={social.name}>
                  <a href={social.url} target="_blank">
                    <social.icon className="text-2xl" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
