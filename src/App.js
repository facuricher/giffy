import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link ,Route } from "wouter"

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>app</h1>
        <Link to='/gif/rick'>Gifs de Rick</Link>
        <Link to='/gif/morty'>Gifs de Morty</Link>
        <Link to='/gif/ovni'>Gifs de ovnis</Link>
        <Route component={ListOfGifs}
        path="/gif/:keyword"/>
      </section>
    </div>
  );
}

export default App;
