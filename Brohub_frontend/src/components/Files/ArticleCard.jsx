import * as React from "react";

function ArticleCard() {
  const articleData = {
    authorImage: '/Avatar.png',
    authorName: "Josh Haze",
    authorPostTime: "5 min ago...",
    articleTitle: "The Thrills of Dakar Rally.",
    articleContent:
      "The Dakar Rally is an annual off-road endurance event that challenges competitors to traverse thousands of kilometers through harsh terrain, including deserts, mountains, and dunes, testing their skill and resilience.",
    articleImage: '/Frame49.png',
    articleStats: {
      bumps: 52,
      comments: 10,
    },
    articleGraph: '/Frame26.png',
    shareIcon: '/arrowboldforvard.png',
  };

  return (
    <article className="flex flex-col items-center px-7 pt-4 pb-14 bg-white shadow-sm max-w-full rounded-[35px] max-md:px-5">
      <header className="flex gap-5 justify-between self-stretch w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-3.5">
          <img
            loading="lazy"
            src={articleData.authorImage}
            alt={`${articleData.authorName}'s profile`}
            className="shrink-0 my-auto aspect-[1.02] w-[45px]"
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-medium text-black">
              {articleData.authorName}
            </h2>
            <p className="text-lg text-stone-400">{articleData.authorPostTime}</p>
          </div>
        </div>
        <button className="justify-center px-5 py-2.5 my-auto text-lg font-bold text-white bg-emerald-400 rounded-xl">
          + Follow
        </button>
      </header>
      <h1 className="mt-10 text-2xl font-bold text-black text-left max-md:mt-10 max-md:max-w-full">
        {articleData.articleTitle}
      </h1>
      <p className="mt-6 text-xl text-black max-md:max-w-full">
        {articleData.articleContent}
      </p>
      <div className="flex flex-col justify-center px-0.5 mt-7 w-full max-w-full max-md:max-w-full">
        <img
          loading="lazy"
          src={articleData.articleImage}
          alt="Article related"
          className="w-full aspect-[5.56] max-md:max-w-full"
        />
      </div>
      <footer className="flex gap-5 justify-center self-stretch pr-7 mt-3.5 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <div className="flex flex-col flex-1 text-xs text-center text-stone-400">
          <div className="flex gap-3.5 justify-center">
            <p>{articleData.articleStats.bumps} bumps</p>
            <p>{articleData.articleStats.comments} comments</p>
          </div>
          <img
            loading="lazy"
            src={articleData.articleGraph}
            alt="Article stats graph"
            className="self-center mt-3.5 aspect-[5.26] w-[130px]"
          />
        </div>
        <button className="justify-center px-5 py-2.5 my-auto text-lg font-bold text-white bg-emerald-400 rounded-xl">
          <div className="flex gap-1.5 justify-center">
            <img
              loading="lazy"
              src={articleData.shareIcon}
              alt="Share icon"
              className="shrink-0 w-6 aspect-square "
            />
            <span >Share</span>
          </div>
        </button>
      </footer>
    </article>
  );
}

export default ArticleCard;
