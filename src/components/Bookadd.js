import React, { useState } from "react";
import {  useNavigate, Link } from "react-router-dom";
function Bookadd() {
  // const location = useLocation();
  // const { username: username } = location.state;
  const [formData, setFormData] = useState({
    bookname: "",
    author: "",
    date: "",
    description: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/bookadd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Data Added Succesfully :)");
        navigate("../");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <header>
        <nav className="navbar">
        <Link to="../" className="logo">
            Library
          </Link>
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
      <div className='doc'>
      {/* <h1 > Welcome {username}  :)</h1> */}
      <h2 >Add new book !!</h2> 
      </div>
      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Book Name
            </label>
            <input
              type="text"
              className="form-control"
              name="bookname"
              value={formData.bookname}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Author Name</label>
              <input
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={formData.author}
                onChange={handleChange}
                name="author"
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Date</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Description
            </label>
            <input type="text" className="form-control" name="description" value={formData.description}
                onChange={handleChange}
             />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default Bookadd;
