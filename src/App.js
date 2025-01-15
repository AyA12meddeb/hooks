import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MovieList from './MovieList';
import Search from './search';

function App() {
  const [keyword, setKeyword] = useState("");
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
  const search = (text) => {
    setKeyword(text);
  };                
  return (
    <div className="App">
<Search search={search}/>
<MovieList movies={movies.filter(
          (el) =>
          el.title.toLowerCase().includes(keyword.toLowerCase().trim())
        )} />


    </div>
  );
}

export default App;
