import {
  FaGlobe,
  FaGoogle,
  FaKeyboard,
  FaLanguage,
  FaMoon,
  FaQuestionCircle,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { RiFileUserFill } from "react-icons/ri";
import { SiAuthentik } from "react-icons/si";
import { FiMoon } from "react-icons/fi";

export const accounts = [
  {
    id: 1,
    icon: <FaGoogle />,
    name: "Google",
  },
  {
    id: 2,
    icon: <RiFileUserFill />,
    name: "switch account",
    more: true,
  },
  {
    id: 3,
    icon: <FaSignOutAlt />,
    name: "sign out",
  },
  {
    id: 4,
    icon: <FaGoogle />,
    name: "YouTube Studio",
  },
  {
    id: 5,
    icon: <FaUser />,
    name: "purchases and memberships",
  },
  {
    id: 6,
    icon: <FaSignOutAlt />,
    name: "your data in YouTube",
  },
  {
    id: 7,
    icon: <FiMoon />,
    name: "Appearance: Dark theme",
    more: true,
  },
  {
    id: 8,
    icon: <FaLanguage />,
    name: "language: British English ",
    more: true,
  },
  {
    id: 9,
    icon: <SiAuthentik />,
    name: "Restricted Mode: off",
    more: true,
  },
  {
    id: 10,
    icon: <FaGlobe />,
    name: "Location: Nigeria",
    more: true,
  },
  {
    id: 11,
    icon: <FaKeyboard />,
    name: "Keyboard Shortcuts",
  },
  {
    id: 12,
    icon: <IoSettings />,
    name: "Settings",
  },
  {
    id: 11,
    icon: <FaQuestionCircle />,
    name: "helps",
  },
];
