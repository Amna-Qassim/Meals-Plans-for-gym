import "./App.css";
import Home from "./Components/Courses";
import { Routes, Route } from "react-router-dom";
import { UserDetailes } from "./Components/UserDetailes";
import { AddNewCourse } from "./Components/AddNewCourse";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userDetails" element={<UserDetailes />} />
        <Route path="/addNewCourse" element={<AddNewCourse />} />
      </Routes>
    </div>
  );
}

export default App;
