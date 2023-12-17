import React from "react";
import { Link } from "react-router-dom";
// import '../components/assets/css/style.css'
// import '../components/assets/css/bootsnav.css'
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
function Home() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
        <Link to="signin" className="logo">
            Library
          </Link>
          {/* <div className="logo">Library</div> */}
          <ul className="nav-links">
            <li>
              <a href="signin">Login</a>
            </li>
            <li>
              <a href="signup">SignUp</a>
            </li>
            <li>
              <a href="book">Books</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <div className="header-text">
          <h2>
            Welcome<span>,</span> To
            <br /> Library Management
            <br /> website<span>.</span>{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}
export default Home;
