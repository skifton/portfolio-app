import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { SOCIALS } from "../../data/socials";
import Button from "../Form/Button";
import { ROUTES } from "../../routes/routes";
import FadeInOnScroll from "../FadeInOnScroll";
import Avatar from "../../assets/avatar-with-bg.jpg";

const Footer: React.FC = () => {
  const intl = useIntl();

  const navItems = [
    {
      label: intl.formatMessage({ id: "NAVIGATION.MAIN" }),
      href: ROUTES.main,
    },
    {
      label: intl.formatMessage({ id: "NAVIGATION.ABOUT" }),
      href: ROUTES.about,
    },
    {
      label: intl.formatMessage({ id: "NAVIGATION.PROJECTS" }),
      href: ROUTES.projects,
    },
    {
      label: intl.formatMessage({ id: "NAVIGATION.CONTACTS" }),
      href: ROUTES.contact,
    },
  ];

  return (
    <footer className="border-t border-t-gray-200/40 pt-16 md:pt-24 pb-8 md:pb-10">
      <div className="max-w-screen-xl mx-5 xl:mx-auto flex flex-col md:flex-row pb-20 border-b border-b-gray-200/30 space-x-0 md:space-x-16 space-y-10 md:space-y-0">
        <div className="flex-1 space-y-10">
          <div className="flex space-x-8 items-center">
            <FadeInOnScroll>
              <img
                className="w-32 h-32 md:w-44 md:h-44 rounded-full object-center object-cover "
                src={Avatar}
                alt="Anton Simanenkau"
              />
            </FadeInOnScroll>
            <div className="space-y-4">
              <FadeInOnScroll>
                <p className="text-2xl md:text-4xl text-white font-medium ">
                  <FormattedMessage id="FOOTER.ANTON_SIMANENKAU" />
                </p>
              </FadeInOnScroll>
              <FadeInOnScroll>
                <p className="text-[#c3cad5] text-lg md:text-xl ">
                  <FormattedMessage id="FOOTER.SPECIALIZATION" />
                </p>
              </FadeInOnScroll>
            </div>
          </div>
          <FadeInOnScroll>
            <ul className="list-none flex space-x-8 max-w-sm ">
              {SOCIALS.map((social) => (
                <li key={social.name}>
                  <a className="text-white" href={social.url} target="_blank">
                    <social.icon className="text-2xl md:text-4xl" />
                  </a>
                </li>
              ))}
            </ul>
          </FadeInOnScroll>
        </div>
        <div className="flex-1 space-y-10">
          <FadeInOnScroll>
            <p className="text-3xl md:text-5xl text-white font-medium ">
              <FormattedMessage id="FOOTER.GET_IN_TOUCH" />
            </p>
          </FadeInOnScroll>
          <div className="flex space-x-20">
            <FadeInOnScroll>
              <div className="space-y-8">
                <p className="text-xl text-[#c3cad5] font-semibold ">
                  <FormattedMessage id="FOOTER.EMAIL_ME" />
                </p>
                <Button className="" link="mailto:skifdev.info@gmail.com">
                  <FormattedMessage id="FOOTER.EMAIL" />
                </Button>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </div>
      <div className="pt-10 flex flex-col md:flex-row justify-between max-w-screen-xl mx-5 xl:mx-auto text-white space-y-4 md:space-y-0">
        <FadeInOnScroll>
          <ul className="list-none flex space-x-6 md:space-x-10 group ">
            {navItems?.map((item) => (
              <li className="group-hover:text-gray-600" key={item.label}>
                <Link
                  className="text-lg md:text-xl hover:text-white transition duration-300"
                  to={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <p className="text-base md:text-xl">
            <FormattedMessage id="FOOTER.COPYRIGHT" />
          </p>
        </FadeInOnScroll>
      </div>
    </footer>
  );
};

export default Footer;
