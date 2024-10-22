import { Link } from "react-router-dom";
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
import { useState } from "react";
const navigates = [
  {
    id: 1,
    name: "",
    components: [
      {
        id: 1,
        name: "home",
        icon: <MdOutlineHome />,
        active: <MdHomeFilled />,
        link: "/",
      },
      {
        id: 2,
        name: "shorts",
        icon: <SiYoutubeshorts />,
        active: <SiYoutubeshorts />,
        link: "/",
      },
      {
        id: 3,
        name: "subscriptions",
        icon: <MdOutlineSubscriptions />,
        active: <MdOutlineSubscriptions />,
        link: "/",
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
        link: "/",
      },
      {
        id: 2,
        name: "playlists",
        icon: <MdOutlinePlaylistAdd />,
        active: <RiPlayListAddFill />,
        link: "/",
      },
      {
        id: 3,
        name: "watch later",
        icon: <FaHome />,
        active: <FaHome />,
        link: "/",
      },
      {
        id: 4,
        name: "liked videos",
        icon: <RiThumbUpLine />,
        active: <FaThumbsUp />,
        link: "/",
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
        link: "/",
      },
      {
        id: 2,
        name: "music",
        icon: <IoMusicalNoteSharp />,
        active: <BiSolidMusic />,
        link: "/",
      },
      {
        id: 3,
        name: "gaming",
        icon: <PiGameControllerBold />,
        active: <SiYoutubegaming />,
        link: "/",
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

function Leftsidebar() {
  const [selected, setSelected] = useState("home");

  return (
    <div>
      <div className="fixed overflow-scroll h-[120vh]">
        <div className=" mt-2 p-2 ml-2 ">
          <div className="flex">
            <img src="/icons/menu.svg" width={50} height={50} alt="menu-icon" />
            <Link to="/" className="flex">
              <img
                src="/icons/logo.svg"
                width={50}
                height={50}
                alt="menu-icon"
              />
              <p className="text-3xl font-bold">YouTube</p>
            </Link>

            <sub>NG</sub>
          </div>
          <div>
            {navigates.map((navigate) => (
              <div key={navigate.id} className="mt-4 border-b pb-2">
                <p className="text-3xl">{navigate.name}</p>
                <div>
                  {navigate.components.map((component) => (
                    <Link
                      onClick={() => setSelected(component.name)}
                      to={`/${component.link}`}
                      key={component.id}
                      className={`flex mt-1 rounded-lg cursor-pointer hover:bg-[#dfdfdf7a]  p-2 ${
                        component.name == selected && "bg-[#7c7c7c5e]"
                      }`}
                    >
                      <p className="text-3xl">{component.icon}</p>

                      <p className="text-2xl capitalize ml-7">
                        {component.name}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p>hi mom</p>
        </div>
      </div>

      <div className=" mt-2 p-2 ml-2 w-[20rem]"></div>
    </div>
  );
}

export default Leftsidebar;
