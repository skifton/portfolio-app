import React from "react";
import Button from "../../components/Form/Button";
import { ROUTES } from "../../routes/routes";
import { FormattedMessage, useIntl } from "react-intl";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const NotFound: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>{intl.formatMessage({ id: "HELMET.NOT_FOUND.TITLE" })}</title>
      </Helmet>
      <main className="h-[70vh] max-w-screen-xl mx-5 xl:mx-auto flex justify-center items-center">
        <motion.p
          className="absolute text-[8rem] sm:text-[10rem] md:text-[15rem] lg:text-[18rem] xl:text-[20rem] text-white opacity-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <FormattedMessage id="NOT_FOUND.404" />
        </motion.p>
        <div className="space-y-10 flex flex-col items-center">
          <motion.div
            className="bg-white w-[4rem] h-2"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          <div className="space-y-6 text-center">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-medium"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <FormattedMessage id="NOT_FOUND.PAGE_NOT_FOUND" />
            </motion.h1>
            <motion.p
              className="text-[#c3cad5] text-base md:text-lg max-w-[30rem]"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <FormattedMessage id="NOT_FOUND.DESCRIPTION" />
            </motion.p>
          </div>

          <Button type="button" link={ROUTES.main}>
            <FormattedMessage id="NOT_FOUND.BACK_TO_HOME" />
          </Button>
        </div>
      </main>
    </>
  );
};

export default NotFound;
