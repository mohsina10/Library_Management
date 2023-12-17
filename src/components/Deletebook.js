import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
 import axios from "axios";
 function Deletebook() { 
  const [itemId, setItemId] = useState('');

  const handleDelete = async () => { 
    console.log(itemId)
    try {
      await axios.delete(`http://localhost:5000/api/delete/${itemId}`);
      alert("Data Deleted Succesfully");
      // Handle success, maybe update the UI or do something else
    } catch (error) {
      // Handle error
      console.error('Error deleting item:', error);
    }
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
      
      <h2 >Delete book !!</h2> 
      </div>
      <div className="doc3">
      <div className=" container mt-5 ">
      {/* <label htmlFor="name" className="form-label">
              Enter book Name
       </label><br/> */}
      <input type="text" value={itemId} onChange={(e) => setItemId(e.target.value)} />
      <button type="button" className="btn btn-primary" onClick={handleDelete}>Delete Item</button>
      </div>
    </div>
    </div>
  )
}
export default Deletebook;