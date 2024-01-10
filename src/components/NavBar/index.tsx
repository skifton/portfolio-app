import React, { useRef, useState } from "react";
import { useIntl } from "react-intl";
import { ROUTES } from "../../routes/routes";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-no-background.svg";
import { useClickAway } from "react-use";
import { Cross as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

const NavBar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));
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
    <>
      <nav className="font-[roboto] hidden justify-between items-center w-full lg:flex">
        <Link to={ROUTES.main}>
          <img className="w-44 h-24" src={Logo} alt="logo" />
        </Link>
        <ul className="flex space-x-14 group text-white">
          {navItems?.map((item) => (
            <li className="group-hover:text-gray-600" key={item.href}>
              <Link
                className="text-xl hover:text-white transition duration-300"
                to={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="font-[roboto] flex justify-between items-center w-full lg:hidden">
        <Link to={ROUTES.main}>
          <img className="w-44 h-24" src={Logo} alt="logo" />
        </Link>
        <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed left-0 shadow-4xl right-0 top-[7rem] p-5 pt-0 border-b border-b-white/20 bg-[#1b1f24] flex justify-center z-10"
            >
              <ul className="flex flex-col space-y-8 text-center">
                {navItems?.map((item, idx) => (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={item.label}
                    className="w-full p-[0.08rem] rounded-xl"
                  >
                    <Link
                      className="text-white text-xl hover:text-[#FFD700] transition duration-300"
                      to={item.href}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default NavBar;
