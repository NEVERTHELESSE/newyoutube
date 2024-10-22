import { useState, useEffect } from "react";
import Homeskeleton from "../loading/Homeskeleton";
import { Link } from "react-router-dom";
import { Videos } from "./video";
import Sort from "../home/Selection";

function Video({ selected, setSelected, value }) {
  const [limit, setLimit] = useState(20);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY + window.innerHeight + 30;
      const documentHeight = document.body.offsetHeight;

      if (scrollTop >= documentHeight) {
        setLoading(true);
        setTimeout(() => {
          setLimit(limit + 10);
          setLoading(false);
        }, 1000);
        console.log(limit);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [limit]);
  const newvideo =
    selected != "all"
      ? Videos.filter(
          (r) =>
            r.categories == selected &&
            r.title.toLocaleLowerCase().includes(value)
        )
      : Videos;
  return (
    <div>
      <Sort setSelected={setSelected} />
      <div className="flex flex-wrap ">
        {newvideo != "" ? (
          newvideo
            .filter((r) => r.title.toLocaleLowerCase().includes(value))
            .slice(0, limit)
            .map((video, index) => {
              return (
                <div key={index} className="m-2 w-[400px]">
                  <Link to={`/video/${video.id}`}>
                    <img
                      src={video.poster_url}
                      width={500}
                      height={300}
                      alt="img"
                      className=" rounded-2xl bg-gray-400"
                    />
                  </Link>
                  <div className="flex mt-3">
                    <img
                      src={video.user.profile_pics}
                      width={50}
                      height={50}
                      alt={video.user.profile_pics}
                      className="rounded-full bg-gray-400 mr-3 min-h-[50px] min-w-[50px] max-h-[50px] max-w-[50px]"
                    />
                    <div>
                      <p className="font-bold capitalize">
                        {video.title.length > 30
                          ? `${video.title.slice(0, 30)}...`
                          : video.title}
                      </p>
                      <p>{video.user.full_name}</p>
                    </div>
                  </div>
                </div>
              );
            })
        ) : (
          <Homeskeleton limit={12} />
        )}
        {loading && <Homeskeleton limit={5} />}
      </div>
    </div>
  );
}

export default Video;
