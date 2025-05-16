import { INavItem } from "@/types";
import {
  faHome,
  faUser,
  faBriefcase,
  faTimeline,
  faAward,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export const navMenus: INavItem[] = [
  {
    name: "About",
    link: "/#about",
    icon: faUser,
  },
  {
    name: "Services",
    link: "/#services",
    icon: faBriefcase,
  },
  {
    name: "Experiences",
    link: "/#experiences",
    icon: faTimeline,
  },
  {
    name: "Skills",
    link: "/#skills",
    icon: faAward,
  },
  {
    name: "Contact",
    link: "/#contact",
    icon: faEnvelope,
  },
];
