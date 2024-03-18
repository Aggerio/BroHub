import React from "react";

function PostCard() {
    return (
      <article className="flex flex-col px-14 pt-5 mt-28 max-w-full bg-white rounded-2xl shadow-sm w-[840px] max-md:px-5 max-md:mt-10">
        <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-3 justify-center">
            <img
              loading="lazy"
              src=""
              alt="Author avatar"
              className="shrink-0 my-auto w-9 aspect-square"
            />
            <div className="flex flex-col py-1">
              <div className="text-lg font-medium text-black">Josh Haze</div>
              <div className="mt-3 text-sm text-stone-400">5 min ago...</div>
            </div>
          </div>
          <button className="justify-center self-start px-5 py-2.5 text-lg font-bold text-white bg-emerald-400 rounded-xl">
            + Follow
          </button>
        </div>
        <h2 className="mt-8 text-2xl font-semibold text-black max-md:max-w-full">
          The thrills of Dakar Rally.
        </h2>
        <p className="self-start mt-4 text-base text-black max-md:max-w-full">
          The Dakar Rally is an annual off-road endurance event that challenges
          competitors to traverse thousands of kilometers through harsh terrain,
          including deserts, mountains, and dunes, testing their skill and
          resilience.{" "}
        </p>
      </article>
    );
  }
  export default PostCard;
  
  