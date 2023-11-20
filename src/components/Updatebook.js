import React, { useState, useEffect } from "react";
 import axios from "axios";
 function Updatebook() { 
  const [itemId, setItemId] = useState('');
  const [updatedData, setUpdatedData] = useState({
    bookname: '',
    author: '', 
    date:'',
   
  }); 
  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/update/${itemId}`, updatedData);
      console.log(response.data.message);
    } catch (error) {
      console.error('Error updating item:', error);
  
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
      <input type="text" placeholder="Item ID" value={itemId} onChange={(e) => setItemId(e.target.value)} />
      <input type="text" placeholder="Name" value={updatedData.bookname} onChange={(e) => setUpdatedData({ ...updatedData, bookname: e.target.value })} />
      <input type="text" placeholder="Age" value={updatedData.author} onChange={(e) => setUpdatedData({ ...updatedData, author: e.target.value })} />
      <input type="text" placeholder="Name" value={updatedData.date} onChange={(e) => setUpdatedData({ ...updatedData, date: e.target.value })} />
      {/* Add other input fields as needed */}
      <button onClick={handleUpdate}>Update Item</button>
    </div>
  )
}
export default Updatebook;