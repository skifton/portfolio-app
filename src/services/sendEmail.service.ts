import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { IContact, IDetailContact } from "../models/contact.model";
import toast from "react-hot-toast";

const sendEmail = async (data: IContact | IDetailContact) => {
  return axios
    .post("/.netlify/functions/sendEmail", data)
    .then((res) => res.data);
};

export const useSendEmail = (onSuccess?: () => void, onError?: () => void) => {
  return useMutation({
    mutationFn: (data: IContact | IDetailContact) => {
      return sendEmail(data);
    },
    onSuccess: () => {
      toast.success("Email sent successfully");
      if (onSuccess) onSuccess();
    },
    onError: () => {
      toast.error("Error sending email");
      if (onError) onError();
    },
  });
};
