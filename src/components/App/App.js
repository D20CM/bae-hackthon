import logo from "../../logo.svg";
import Landing from "../Landing/landing";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Progress } from "../Progress/Progress";
import { EmergingReader } from "../EmergingReader/EmergingReader";
//import { Profile } from "../Profile/Profile";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>LearnIt!</p>
      </header> */}

      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/landing">Home</Link> | <Link to="/profile">Profile</Link> |{" "}
        <Link to="/progress">Progress</Link> |{" "}
        <Link to="/emergingreader">Emerging Reader</Link>
      </nav>
      <Routes>
        {/* <Route path="profile" element={<Profile />} /> */}
        <Route path="emergingreader" element={<EmergingReader />} />
        <Route path="progress" element={<Progress />} />
        <Route path="landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
