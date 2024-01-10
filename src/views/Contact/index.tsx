import React, { useEffect } from "react";
import * as yup from "yup";
import { Helmet } from "react-helmet-async";
import { FormattedMessage, useIntl } from "react-intl";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSendEmail } from "../../services/sendEmail.service";
import ContactForm from "./ContactForm";
import { SOCIALS } from "../../data/socials";
import { IDetailContact } from "../../models/contact.model";

const Contact: React.FC = () => {
  const intl = useIntl();

  const { mutate: sendEmail } = useSendEmail();

  const ContactFormSchema = yup.object().shape({
    name: yup
      .string()
      .required(
        intl.formatMessage({ id: "MAIN.CONTACT_SECTION.FORM.NAME.REQUIRED" })
      ),
    email: yup
      .string()
      .email(
        intl.formatMessage({ id: "MAIN.CONTACT_SECTION.FORM.EMAIL.INVALID" })
      )
      .required(
        intl.formatMessage({ id: "MAIN.CONTACT_SECTION.FORM.NAME.REQUIRED" })
      ),
    subject: yup
      .string()
      .required(
        intl.formatMessage({ id: "MAIN.CONTACT_SECTION.FORM.SUBJECT.REQUIRED" })
      ),
    message: yup
      .string()
      .required(
        intl.formatMessage({ id: "MAIN.CONTACT_SECTION.FORM.MESSAGE.REQUIRED" })
      ),
  });

  const useFormReturn = useForm<IDetailContact>({
    resolver: yupResolver(ContactFormSchema),
  });

  const onSubmit = (data: IDetailContact) => {
    sendEmail(data);
  };

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Helmet>
        <title>{intl.formatMessage({ id: "HELMET.CONTACT.TITLE" })}</title>
      </Helmet>
      <main className="max-w-screen-xl mx-5 xl:mx-auto space-y-6 md:space-y-10 py-20">
        <div className="space-y-8">
          <motion.div
            className="w-[20%] md:w-[15%] lg:w-[10%] h-2 bg-white"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <FormattedMessage id="CONTACT.LET'S_WORK" />
          </motion.h1>
        </div>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-14 lg:space-x-16 xl:space-x-20 space-y-10 md:space-y-0">
          <div className="space-y-6">
            <motion.h2
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-medium"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <FormattedMessage id="CONTACT.GET_IN_TOUCH" />
            </motion.h2>
            <motion.p
              className="text-[#c3cad5] text-base md:text-lg"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <FormattedMessage id="CONTACT.DESCRIPTION" />
            </motion.p>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <ul className="list-none flex space-x-6 max-w-sm text-white">
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

          <ContactForm ReturnFormInstance={useFormReturn} onSubmit={onSubmit} />
        </div>
      </main>
    </>
  );
};

export default Contact;
