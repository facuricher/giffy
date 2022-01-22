import './App.css';
import ListOfGifs from './components/ListOfGifs/ListOfGifs';
import { Route } from "wouter"
import Home from './components/pages/Home';

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Route 
        component={Home}
        path='/'
        />
        <Route component={ListOfGifs}
        path="/search/:keyword"/>
      </section>
    </div>
  );
}

export default App;
