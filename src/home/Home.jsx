import { useState } from "react";
import Header from "../header/Header";
import Leftsidebar from "../leftsidebar/Leftsidebar";
import Video from "../video/Video";

function Home() {
  const [selected, setSelected] = useState("all");
  const [value, setValue] = useState("");
  return (
    <div>
      <div className="flex">
        <Leftsidebar />
        <div>
          <Header setValue={setValue} />
          <Video value={value} selected={selected} setSelected={setSelected} />
        </div>
      </div>
    </div>
  );
}

export default Home;
