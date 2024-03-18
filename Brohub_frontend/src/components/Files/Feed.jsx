import FeedNav from "./FeedNav";
import { FaHome } from "react-icons/fa";
import PostCard from "./PostCard";
import SmallProfile from "./SmallProfile";
import { useState, useEffect } from "react";
import axios from "axios";

const Feed = () => {
  const [feed_posts, setFeedPosts] = useState([]);
  const [feed_events, setFeedEvents] = useState([]);
  const [location, setLocation] = useState('');

  useEffect(() => {
    const location = window.location.pathname.split("/").pop();
    setLocation(location);
    if (location == "feed") {
      axios
        .get(`http://127.0.0.1:5000/posts`)
        .then((response) => {
          const posts = response.data;
          setFeedPosts(posts);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    axios
      .get(`http://127.0.0.1:5000/events`)
      .then((response) => {
        const events = response.data;
        setFeedEvents(events);
      })
      .catch((error) => {
        console.log(error);
      });
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
          {(location == "feed") ? (
            <div>
              {feed_posts.map((item, index) => {
                return (
                  <div key={index}>
                    <PostCard
                      image_id={item.image_id}
                      title={item.title}
                      content={item.content}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div></div>
          )}
          {feed_events.map((item, index) => {
            return (
              <div key={index}>
                <PostCard
                  image_id={item.image_id }
                  title={item.title}
                  content={item.title}
                />
              </div>
            );
          })}
          {/* <div>
          <PostCard image_id={1} title="Hello" content="Hello" />
        </div>
        <div>
          <PostCard />
        </div>
        <div>
          <PostCard />
        </div>
        <div>
          <PostCard />
        </div> */}
        </div>
        <div className="second-half  border w-[300px] h-[500px] shadow-[5px_5px_5px_#2ED29D] fixed mr-[130px] mt-[35px] rounded-[20px] border-solid border-[#2ED29D] right-2.5">
          <SmallProfile />
        </div>
      </div>
    </>
  );
};

export default Feed;
