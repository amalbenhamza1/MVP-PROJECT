import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
const App = () => {
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [createdAt,setCreatedAt] = useState('');
  const [booksList,setBooksList] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:4000/api/books/getAll').then((response)=>{
      setBooksList(response.data)
     
    })
  },[])
  const addBook = () =>{
    axios.post("http://localhost:4000/api/books/add",{
      title: title,
      author: author,
      createdAt:createdAt
    })
      setBooksList(
        [...booksList,{title: title,author: author,createdAt:createdAt}]
        )
  }
  const deleteBook = (id) => {
    axios.delete("http://localhost:4000/api/books/:${id}",id);
  }
  return (
    <div className="App">
     <h1>BOOK FINDER APP</h1>
     
     <div className='form'>
      <label>Tiltle:</label>
     <input type='text' name='title' onChange={(e)=>{
      setTitle(e.target.value)}}/>
      <label>Author:</label>
     <input type='text' name='author' onChange={(e)=>{
      setAuthor(e.target.value)}}/>
      <label>Created At:</label>
     <input type='text' name='createdAt' onChange={(e)=>{
      setCreatedAt(e.target.value)}}/>
     <button onClick={addBook}>Add Book</button>
     <div>
      <h2>Books List:</h2>
      {booksList.map((val) => {
      return (
        <center>
          <div className='card'>
            <h4>Title: {val.title}
      <br></br>
      Author: {val.author}
      <br></br>
      Created At: {val.createdAt}</h4>
      
      </div><button onClick={()=>{deleteBook(val.id)}}>delete</button>
      </center>
        
        )   
    })}
    </div>
     </div>
     
    </div>
  );
}

export default App;
