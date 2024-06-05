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
        <h1>Test Project</h1>
        <p>MOVIES: {movies.length}</p>
        {movies.map((movies) => (
          <div key={movies.id}>
            <h3>Name: {movies.name}</h3>
            <p>Year: {movies.year}</p>
            <p>Rating: {movies.rating}</p>
            <p>Description: {movies.description}</p>
          </div>
        ))}
      </header>
    </div>
  )
}

export default App;
