import { FaHome } from "react-icons/fa";
function FeedNav() {
  return (
    <>
      <div className="main-nav blockshadow-[inset] h-[50px] flex items-center justify-between shadow-[10px_10px_10px_#2ED29D] pl-[100px] pr-20 rounded-[20px]">
        <div className="container float-left">
          <input type="search" placeholder="Search" className="search-bar flex items-center justify-center border w-[600px] pl-2 p-[5px] rounded-xl border-solid border-[gray]" />
        </div>
        <div>
          <ul className="menu text-[black] pb-[18px] list-none">
            <li className="float-left flex items-center text-xl font-thin mr-[45px];
  text-shadow: 1px 1px 1px gray">
              <a href="/home">
              <FaHome />
              <span className="home shadow-none z-[100] cursor-pointer ml-2">Home</span>
              </a>
            </li>
            <li className="float-left flex items-center text-xl font-thin mr-[45px];
  text-shadow: 1px 1px 1px gray">
              < a href="/feed">
              <FaHome />
              <span className="feed text-[#2ED29D] shadow-none z-[100] cursor-pointer ml-2;
  text-shadow: none">Feed</span>
              </a>
            </li>
            <li className="float-left flex items-center text-xl font-thin mr-[45px];
  text-shadow: 1px 1px 1px gray">
              <a href="/events">
              <FaHome />
              <span className="events shadow-none z-[100] cursor-pointer ml-2">Events</span>{" "}
              </a>
            </li>
            <li className="float-left flex items-center text-xl font-thin mr-[45px];
  text-shadow: 1px 1px 1px gray" >
              <a href='/chat'>
              <FaHome />
              <span className="chat shadow-none z-[100] cursor-pointer ml-2">Chat</span>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default FeedNav;