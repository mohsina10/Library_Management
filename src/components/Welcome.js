import React ,{useState}from 'react'
import { useLocation } from 'react-router-dom'; 

 function Welcome() {
  const location = useLocation();
  const { username: username } = location.state; 
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };
  return (
    <div>
        <header>
        <nav className="navbar">
          <div className="logo">Library</div>
          <ul className="nav-links">
            <li><a href="signin">Login</a></li>
            <li><a href="signup">SignUp</a></li>
            <li><a href="book">Book</a></li>
          </ul>
        </nav>
      </header> 
      <div className='doc'>
      <h1> Welcome {username} !!!</h1> <br/> <br/>
      <br></br>
      {/* <h3>Add Your Question papers here</h3> <br/> */}
      </div>
      <div className='file'> 
      {/* <h3>Upload a PDF Files</h3><br/> */}
      <div className="btn-grp">
      <a href='bookadd' className="btn btn-success " role="button">
    Add Book
  </a>
  <a href='delete' className="btn btn-success " role="button">
    Delete Book
  </a>
  <a href='update' className="btn btn-success " role="button">
    Update Book
  </a>
  </div>
      </div>
    </div>
  )
}
export default Welcome;