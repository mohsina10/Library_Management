import React, { useState, useEffect } from "react";
// import axios from "axios";
function Viewbook() {
  const [data, setData] = useState([]);
  const [mydata, setMydata] = useState([]);
  const [name, setName] = useState("");
  const [myd, setMyd] = useState(0);
  const handleUpdate = async () => {
    setMyd(1);
    const foundData = data.filter(item => item.bookname === name);
    if (foundData) {
      setMydata(foundData);
    }
   console.log(foundData);

  }; 
  console.log(name); 
  console.log(myd);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/data");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
        <h1>Books List</h1>
      </div> 
      <div className="search">
      <input
        type="text"
        placeholder="Enter Bookname"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" className="btn btn-success" onClick={handleUpdate}>
        Search
      </button> 
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Sr No.</th>
            <th scope="col">Book Name</th>
            <th scope="col">Author</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          { 
           myd === 1  ? (
            mydata.map((item, index) => (
            <tr key={item._id} scope="row">
              <td>{index+1}</td>
              <td>{item.bookname}</td>
              <td>{item.author}</td>
              <td>{item.date}</td>
            </tr>
            ))
          ) : (
            data.map((item, index) => (
              <tr key={item._id} scope="row">
                <td>{index + 1}</td>
                <td>{item.bookname}</td>
                <td>{item.author}</td>
                <td>{item.date}</td>
              </tr>
            ))
          )}
            
        </tbody>
      </table>
    </div>
  );
}
export default Viewbook;
