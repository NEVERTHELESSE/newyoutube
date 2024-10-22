import { useState } from "react";

function Sort({ setSelected }) {
  const selections = [
    "all",
    "computer science",
    "cybersecurity",
    "javascript",
    "java",
    "operating systems",
    "computer files",
    "music",
    "mobile app development",
    "gaming",
    "python",
    "security hackers",
    "live",
    "graphics design",
    "news",
    "afrobeat",
  ];
  const [selecting, setSelecting] = useState("all");
  return (
    <div className="w-[calc(100vw-25rem)] overflow-hidden pr-4">
      <div className="flex flex-nowrap w-[200vw]">
        {selections.map((selection) => (
          <p
            onClick={() => {
              setSelected(0);
              setSelecting(selection);
              setTimeout(() => {
                setSelected(selection);
              }, 500);
            }}
            key={selection}
            className={` font-bold  cursor-pointer hover:bg-gray-400 ${
              selection == selecting
                ? "bg-fgcolor text-primarycolor"
                : "bg-primarycolor"
            } p-2 rounded-lg w-max m-2 capitalize px-4`}
          >
            {selection}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Sort;
