import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Courses } from "./Components/Courses";
import { UserDetailes } from "./Components/UserDetailes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/userDetails" element={<UserDetailes />} />
      </Routes>
    </div>
  );
}

export default App;
