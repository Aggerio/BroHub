import Landing from "./components/Main/Landing";
import ProfilePage from "./components/Files/Merge";
// import ArticleCard from "./components/Files/ArticleCard";
import QuickChat from "./components/Main/ChatComponent";
import Onboarding from "./components/Files/Onboarding";
import Feed from "./components/Files/Feed";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="">

      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/home" element={<Landing/>}></Route>
          <Route path="/feed" element={<Feed/>}></Route>
          <Route path="/events" element={<Feed/>}></Route>
          <Route path="/chat" element={<QuickChat/>}></Route>
          <Route path="/profile" element={<ProfilePage/>}></Route>
          <Route path="/profile/:id" element={<ProfilePage/>}></Route>
          <Route path="/onboarding" element={<Onboarding/>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
