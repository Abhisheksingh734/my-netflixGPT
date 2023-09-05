import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-16 absolute text-white bg-gradient-to-r from from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-md w-2/4">{overview}</p>
      <div className="">
        <button className=" p-4 px-9 rounded-md bg-white bg-opacity-80 hover:bg-opacity-100 text-xl text-black font-bold">
          Play
        </button>
        <button className="m-2 p-4 px-9 rounded-md bg-gray-500 text-xl hover:opacity-70 text-white font-bold opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
