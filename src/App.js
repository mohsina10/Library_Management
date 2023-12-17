import "./App.css";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-night.min.css"; //npm i bootstrap-dark-5 boostrap
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Book from "./components/Viewbook";
import BookAdd from "./components/Bookadd";
import Delete from "./components/Deletebook";
import Update from "./components/Updatebook";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="book" element={<Book />} />
          <Route path="bookadd" element={<BookAdd />} />
          <Route path="delete" element={<Delete />} />
          <Route path="update" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
