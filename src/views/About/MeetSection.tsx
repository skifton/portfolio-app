import React from "react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import Avatar from "../../assets/avatar-with-bg.png";

const MeetSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-0 h-full lg:h-[90vh] flex items-center max-w-screen-xl mx-5 xl:mx-auto">
      <div className="flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0">
        <div className="flex-1 space-y-10">
          <div className="space-y-10 pb-10 border-b border-b-gray-200/30">
            <motion.div
              className="w-[10rem] h-2 bg-white"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-medium text-white"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <FormattedMessage id="MEET.TITLE" />
            </motion.h1>
            <motion.p
              className="text-[#c3cad5]"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <FormattedMessage id="MEET.DESCRIPTION" />
            </motion.p>
          </div>

          <div className="flex justify-between flex-col md:flex-row space-y-4 md:space-y-0">
            <motion.div
              className="flex space-x-6 items-center"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <p className="text-4xl md:text-6xl font-semibold text-white flex">
                <FormattedMessage id="2" />{" "}
                <span className="text-[#075fe4]">
                  <FormattedMessage id="+" />
                </span>
              </p>
              <p className="font-medium text-xl text-white max-w-full md:max-w-[100px]">
                <FormattedMessage id="MAIN.ABOUT_SECTION.EXPERIENCE" />
              </p>
            </motion.div>

            <motion.div
              className="flex space-x-6 items-center"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <p className="text-4xl md:text-6xl font-semibold text-white flex">
                <FormattedMessage id="10" />{" "}
                <span className="text-[#075fe4]">
                  <FormattedMessage id="+" />
                </span>
              </p>
              <p className="font-medium text-xl text-white nax-w-full md:max-w-[100px]">
                <FormattedMessage id="MAIN.ABOUT_SECTION.PROJECTS" />
              </p>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="flex-1 flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            className="w-9/12 h-9/12 rounded-full object-center object-cover"
            src={Avatar}
            alt="Anton Simanenkau"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MeetSection;
