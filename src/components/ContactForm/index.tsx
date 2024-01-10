import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { IContact } from "../../models/contact.model";
import Input from "../Form/Input";
import Button from "../Form/Button";
import FadeInOnScroll from "../FadeInOnScroll";
import { FormattedMessage, useIntl } from "react-intl";

interface IProps {
  useFormInstance: UseFormReturn<IContact>;
  onSubmit: (data: IContact) => void;
}

const ContactForm: React.FC<IProps> = ({ useFormInstance, onSubmit }) => {
  const intl = useIntl();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormInstance;

  return (
    <form className="space-y-10 w-full" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        render={({ field: { value, onChange } }) => (
          <FadeInOnScroll>
            <Input
              placeholder={intl.formatMessage({
                id: "CONTACT_FORM.NAME.PLACEHOLDER",
              })}
              value={value}
              onChange={onChange}
              error={Boolean(errors.name?.message)}
              helperText={errors.name?.message}
            />
          </FadeInOnScroll>
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field: { value, onChange } }) => (
          <FadeInOnScroll>
            <Input
              placeholder={intl.formatMessage({
                id: "CONTACT_FORM.EMAIL.PLACEHOLDER",
              })}
              value={value}
              onChange={onChange}
              error={Boolean(errors.email?.message)}
              helperText={errors.email?.message}
            />
          </FadeInOnScroll>
        )}
      />

      <Controller
        name="message"
        control={control}
        render={({ field: { value, onChange } }) => (
          <FadeInOnScroll>
            <Input
              placeholder={intl.formatMessage({
                id: "CONTACT_FORM.MESSAGE.PLACEHOLDER",
              })}
              value={value}
              onChange={onChange}
              error={Boolean(errors.message?.message)}
              helperText={errors.message?.message}
              textarea
            />
          </FadeInOnScroll>
        )}
      />

      <Button type="submit">
        <FormattedMessage id="CONTACT_WITH_ME" />
      </Button>
    </form>
  );
};

export default ContactForm;
