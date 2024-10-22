import { BiSolidMusic } from "react-icons/bi";
import { FaHistory, FaHome, FaThumbsUp, FaTrophy } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { HiFire, HiOutlineFire } from "react-icons/hi";
import { IoMusicalNoteSharp } from "react-icons/io5";
import {
  MdHistory,
  MdHomeFilled,
  MdOutlineHome,
  MdOutlinePlaylistAdd,
  MdOutlineSubscriptions,
} from "react-icons/md";
import { PiGameControllerBold } from "react-icons/pi";
import { RiPlayListAddFill, RiThumbUpLine } from "react-icons/ri";
import { SiYoutubegaming, SiYoutubeshorts } from "react-icons/si";
export const navigates = [
  {
    id: 1,
    name: "",
    components: [
      {
        id: 1,
        name: "home",
        icon: <MdOutlineHome />,
        active: <MdHomeFilled />,
      },
      {
        id: 2,
        name: "shorts",
        icon: <SiYoutubeshorts />,
        active: <SiYoutubeshorts />,
      },
      {
        id: 3,
        name: "subscriptions",
        icon: <MdOutlineSubscriptions />,
        active: <MdOutlineSubscriptions />,
      },
    ],
  },
  {
    id: 2,
    name: "You  >",
    components: [
      {
        id: 1,
        name: "history",
        icon: <MdHistory />,
        active: <FaHistory />,
      },
      {
        id: 2,
        name: "playlists",
        icon: <MdOutlinePlaylistAdd />,
        active: <RiPlayListAddFill />,
      },
      {
        id: 3,
        name: "watch later",
        icon: <FaHome />,
        active: <FaHome />,
      },
      {
        id: 4,
        name: "liked videos",
        icon: <RiThumbUpLine />,
        active: <FaThumbsUp />,
      },
    ],
  },
  {
    id: 3,
    name: "Explore",
    components: [
      {
        id: 1,
        name: "trending",
        icon: <HiOutlineFire />,
        active: <HiFire />,
      },
      {
        id: 2,
        name: "music",
        icon: <IoMusicalNoteSharp />,
        active: <BiSolidMusic />,
      },
      {
        id: 3,
        name: "gaming",
        icon: <PiGameControllerBold />,
        active: <SiYoutubegaming />,
      },
    ],
  },
  {
    id: 4,
    name: "More from Youtube",
    components: [
      {
        id: 1,
        name: "Youtube Premium",
        icon: <GiTrophyCup />,
      },
      {
        id: 2,
        name: "Youtube Premium",
        icon: <FaTrophy />,
      },
    ],
  },
];
