import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Adddata from "./components/Adddata/Adddata";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Showdata from "./components/Showdata/Showdata";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route excat path="/" element={<HomePage />}></Route>
        <Route element={<ProtectedRoutes />}>
          <Route
            path="/AddData"
            element={<Adddata heading="Enter Detail" />}
          ></Route>
          <Route path="/showdata" element={<Showdata />}></Route>
          <Route path="/Adddata/edit/:id" element={<Adddata />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
