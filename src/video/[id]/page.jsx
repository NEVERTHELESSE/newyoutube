import React from "react";
import { Videos } from "../../../../video/video";


function page({ params }) {
  const id = params.id
 let result =  Videos.find(r=>r.id == id)
 console.log(result)



  return <div className='ml-[3rem]'>
  <video src='/movies/movie1.mp4' className='w-[60rem] h-[40rem]' preset autoplay controls/>
  </div>;
}

export default page;
