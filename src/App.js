import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MovieList from './MovieList';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Macha 1',
      description: 'children.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlssxo2CjM4fx_fp0RGbJl6IE8KF4CeYVWjShpm3geTE54y3UTQByW203w1FPq-j3O-E&usqp=CAU',
      rating: 4.8,
    },
    {
      title: 'Macha 2',
      description: 'children.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlssxo2CjM4fx_fp0RGbJl6IE8KF4CeYVWjShpm3geTE54y3UTQByW203w1FPq-j3O-E&usqp=CAU',
      rating: 4.7,
    },
    {
      title: 'Macha 3',
      description: 'children.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlssxo2CjM4fx_fp0RGbJl6IE8KF4CeYVWjShpm3geTE54y3UTQByW203w1FPq-j3O-E&usqp=CAU',
      rating: 4.7,
    },
  ]);
  return (
    <div className="App">
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
