import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Updatebook() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [updatedData, setUpdatedData] = useState({
    bookname: "",
    author: "",
    date: "",
  });
  const handleUpdate = async () => {
    try {
      // console.log(updatedData);
      const response = await axios.put(
        `http://localhost:5000/api/update/${name}`,
        updatedData
      );
      console.log(response.data.message);
      if (response) {
        alert("Data Updated Succesfully :)");
        navigate("../");
      }
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">Library</div>
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
      <div className="doc">
        <h2>Update book !!</h2>
      </div>
      {/* <div className="container mt-5">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Book Name
            </label>
            <input
              type="text"
              className="form-control"
              value={name} onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <div className="form-group">
              <label htmlFor="name">New Book Name</label>
              <input
                className="form-control"
                value={updatedData.bookname} 
                onChange={(e) => setUpdatedData({ ...updatedData, bookname: e.target.value })}
              />
            </div>
          </div> 
            <div className="mb-3">
            <div className="form-group">
              <label >Author</label>
              <input
                type="text"
                className="form-control"
                value={updatedData.author} 
                onChange={(e) => setUpdatedData({ ...updatedData, author: e.target.value })}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Date
            </label>
            <input type="text" className="form-control" name="description" value={updatedData.date} 
            onChange={(e) => setUpdatedData({ ...updatedData, date: e.target.value })}
             />
          </div>
          <button type="submit" className="btn btn-success" onClick={handleUpdate}>
            Submit
          </button>
        </form>
  </div>  */}
      <div className="container mt-5">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Book Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="bookname"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                New Book Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="new bookname"
                value={updatedData.bookname}
                onChange={(e) =>
                  setUpdatedData({ ...updatedData, bookname: e.target.value })
                }
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Author
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="author"
                value={updatedData.author}
                onChange={(e) =>
                  setUpdatedData({ ...updatedData, author: e.target.value })
                }
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Date
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="date"
              value={updatedData.date}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, date: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="btn btn-success"
            onClick={handleUpdate}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default Updatebook;
