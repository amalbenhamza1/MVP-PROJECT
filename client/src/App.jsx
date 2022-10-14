import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>BOOK FINDER APP</h1>
     <div className='form'>
      <label>Tiltle:</label>
     <input type='text' name='title'/>
      <label>Author:</label>
     <input type='text' name='author'/>
      <label>Created At:</label>
     <input type='text' name='createdAt'/>
     <button>Add Book</button>
     </div>
    </div>
  );
}

export default App;
