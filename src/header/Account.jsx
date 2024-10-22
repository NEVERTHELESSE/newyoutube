import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";
import {
  FaGlobe,
  FaGoogle,
  FaKeyboard,
  FaLanguage,
  FaQuestionCircle,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { RiFileUserFill } from "react-icons/ri";
import { SiAuthentik } from "react-icons/si";
import { FiMoon } from "react-icons/fi";

const accounts = [
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
    id: 13,
    icon: <FaQuestionCircle />,
    name: "helps",
  },
];

function Account() {
  const apperance = ["use device theme", "Dark theme", "Light theme"];
  const theme = "use device theme";

  function changetheme(theme) {
    if (theme == "Dark theme") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else if (theme == "Light theme") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }

  return (
    <div
      className="absolute right-[3rem] w-[27rem] p-3 rounded-lg shadow-shadow h-[100vh] bg-bgcolor mt-[-2.5rem] "
      id="account"
    >
      <div className="flex items-center">
        <p className="text-2xl bg-red-500  w-[2.5rem] h-[2.5rem] flex justify-center items-center font-bold p-2 rounded-full">
          A
        </p>
        <div className="ml-3">
          <p className="text-2xl font-black">AJIBOLA IBRAHIM</p>
          <p className="font-bold ">neverthelesse21@gmail.com</p>
          <Link to="/channel" className="text-blue-500 font-bold  ">
            Create a channel
          </Link>
        </div>
      </div>
      <hr className="my-3" />
      <div>
        {accounts.map((account) => (
          <div
            className="flex  my-4 items-center text-[1.5rem]"
            key={account.id}
          >
            {account.icon}
            <div className="flex w-full justify-between">
              <p className="ml-4 capitalize">{account.name}</p>
              {account.more && (
                <details>
                  <summary className="list-none">
                    <FaGreaterThan />
                  </summary>
                  <div className="absolute right-[3rem] w-[27rem]  rounded-lg shadow top-[2rem] h-[20rem] bg-primarycolor mt-[-2.5rem] ">
                    <p className="text-2xl p-2">Appearance</p>
                    <hr />
                    <p className="text-[1rem] p-6">
                      Setting applies to this browser only
                    </p>
                    {apperance.map((r) => (
                      <div
                        className="flex cursor-pointer p-2 pl-6 capitalize"
                        onClick={() => changetheme(r)}
                        key={r}
                      >
                        {r == theme && <p>X</p>}
                        <p>{r}</p>
                      </div>
                    ))}
                  </div>
                </details>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Account;
