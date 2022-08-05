import "./App.css";
import Home from "./Components/Courses";
import { Routes, Route } from "react-router-dom";
import { UserDetailes } from "./Components/UserDetailes";
// import { AddCourse } from "./Components/AddCourse";
import MainPage from "./Components/MainPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userDetails" element={<UserDetailes />} />
        {/* <Route path="/addCourse" element={<AddCourse />} /> */}
        {/* <Route path="/userCourse" element={<MainPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
