import FeedNav from "./FeedNav";
import { FaHome } from "react-icons/fa";
import PostCard from "./PostCard";
import SmallProfile from "./SmallProfile";
import { useState, useEffect } from "react";

const Feed = () => {

  const [feed_posts, setFeedPosts] = useState();

  useEffect(() => {

    

  }, []);


  return (
    <>
      <FeedNav />
      &nbsp;
      <div className="sidebyside flex justify-between">
      <div className="first-half w-[1000px]">
        <div className="main-option w-[800px] flex flex-row justify-between items-center ml-[155px] mt-[35px] mb-[50px];s">
          <div className="option-1 border h-[20vh] w-[40vh] flex items-center justify-center shadow-[5px_5px_5px_#2ED29D] text-[x-large] font-[bold] cursor-pointer rounded-[20px] border-solid border-[rgb(180,179,179)]">
            <p>
              <FaHome />
              <span className="find-bros ml-5">Find Bros</span>
            </p>
          </div>
          <div className="option-2 border h-[20vh] w-[40vh] flex items-center justify-center shadow-[5px_5px_5px_#2ED29D] text-[x-large] font-[bold] cursor-pointer rounded-[20px] border-solid border-[rgb(180,179,179)]">
            <p>
              <FaHome />
              <span className="join-convos ml-5">Join Convos</span>
            </p>
          </div>
        </div>
        <div>
          <PostCard />
        </div>
        <div>
          <PostCard />
        </div>
        <div>
          <PostCard />
        </div>
        <div>
          <PostCard />
        </div>
      </div>
      <div className="second-half  border w-[300px] h-[500px] shadow-[5px_5px_5px_#2ED29D] fixed mr-[130px] mt-[35px] rounded-[20px] border-solid border-[#2ED29D] right-2.5">
        <SmallProfile />
      </div>
      </div>
    </>
  );
};

export default Feed;