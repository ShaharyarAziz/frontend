import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [movies, setmovies] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/movies')
      .then((response) => {
        setmovies(response.data); // Update the state with the response data
        console.log(response.data);
      })
      .catch((error) => {
        console.error('There was an error making the request:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Full Stack Project</h1>
        <div>{movies.length}</div>
        {
          movies.map((movies) => {
            <div key={movies.id}>
              <h1>{movies.name}</h1>
              <p>{movies.year}</p>
              <p>{movies.rating}</p>
              <h1>{movies.image}</h1>
              <h1>{movies.description}</h1>
            </div>

          })
        }
      </header>
    </div>
  );
}

export default App;
