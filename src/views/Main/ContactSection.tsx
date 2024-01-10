import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ContactForm from "../../components/ContactForm";
import { IContact } from "../../models/contact.model";
import FadeInOnScroll from "../../components/FadeInOnScroll";
import { FormattedMessage, useIntl } from "react-intl";
import { useSendEmail } from "../../services/sendEmail.service";

const ContactSection: React.FC = () => {
  const intl = useIntl();

  const { mutate: sendEmail, isPending } = useSendEmail();

  const ContactFormSchema = yup.object().shape({
    name: yup
      .string()
      .required(
        intl.formatMessage({ id: "MAIN.CONTACT_SECTION.FORM.NAME.REQUIRED" })
      ),
    email: yup
      .string()
      .required(
        intl.formatMessage({ id: "MAIN.CONTACT_SECTION.FORM.EMAIL.REQUIRED" })
      )
      .email(
        intl.formatMessage({ id: "MAIN.CONTACT_SECTION.FORM.EMAIL.INVALID" })
      ),
    message: yup
      .string()
      .required(
        intl.formatMessage({ id: "MAIN.CONTACT_SECTION.FORM.MESSAGE.REQUIRED" })
      ),
  });

  const useFormReturn = useForm({
    resolver: yupResolver(ContactFormSchema),
  });

  const onSubmit = (data: IContact) => {
    sendEmail(data);
  };

  return (
    <section className="max-w-screen-xl mx-5 xl:mx-auto h-full md:h-[100vh] flex flex-col md:flex-row justify-center space-y-14 text-white py-16 md:py-0">
      <div className="flex flex-1 items-center">
        <div className="space-y-4">
          <FadeInOnScroll>
            <div className="w-[10rem] h-2 bg-white" />
          </FadeInOnScroll>

          <FadeInOnScroll>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium max-w-full md:max-w-[65%] leading-10 lg:leading-snug">
              <FormattedMessage id="MAIN.CONTACT_SECTION.TITLE" />
              <span className="text-[#075fe4] text-[5rem]">→</span>
            </h2>
          </FadeInOnScroll>
        </div>
      </div>
      <div className="flex-1 items-center flex w-full">
        <ContactForm
          useFormInstance={useFormReturn}
          onSubmit={onSubmit}
          disabled={isPending}
        />
      </div>
    </section>
  );
};

export default ContactSection;
