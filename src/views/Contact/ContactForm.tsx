import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { IDetailContact } from "../../models/contact.model";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { FormattedMessage, useIntl } from "react-intl";

interface IProps {
  ReturnFormInstance: UseFormReturn<IDetailContact>;
  onSubmit: (data: IDetailContact) => void;
}

const ContactForm: React.FC<IProps> = ({ ReturnFormInstance, onSubmit }) => {
  const intl = useIntl();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = ReturnFormInstance;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#2d343f] rounded-[16px] w-full px-10 md:px-14 lg:px-16 xl:px-20 py-14 md:py-16 lg:py-20 lx:py-24 space-y-10"
    >
      <Controller
        name="name"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input
            className="text-white"
            value={value}
            onChange={onChange}
            error={Boolean(errors.name?.message)}
            helperText={errors.name?.message}
            placeholder={intl.formatMessage({
              id: "CONTACT_FORM.NAME.PLACEHOLDER",
            })}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input
            className="text-white"
            value={value}
            onChange={onChange}
            error={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
            placeholder={intl.formatMessage({
              id: "CONTACT_FORM.EMAIL.PLACEHOLDER",
            })}
          />
        )}
      />

      <Controller
        name="subject"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input
            className="text-white"
            value={value}
            onChange={onChange}
            error={Boolean(errors.subject?.message)}
            helperText={errors.subject?.message}
            placeholder={intl.formatMessage({
              id: "CONTACT_FORM.SUBJECT.PLACEHOLDER",
            })}
          />
        )}
      />

      <Controller
        name="message"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input
            className="text-white"
            textarea
            value={value}
            onChange={onChange}
            error={Boolean(errors.message?.message)}
            helperText={errors.message?.message}
            placeholder={intl.formatMessage({
              id: "CONTACT_FORM.MESSAGE.PLACEHOLDER",
            })}
          />
        )}
      />

      <Button type="submit" className="w-full">
        <FormattedMessage id="CONTACT_WITH_ME" />
      </Button>
    </form>
  );
};

export default ContactForm;
