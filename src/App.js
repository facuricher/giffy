import './App.css';
import { Route } from "wouter"
import Home from './components/pages/Home';
import SearchResult from './components/pages/SearchResult'

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Route 
        component={Home}
        path='/'
        />
        <Route 
        component={SearchResult}
        path="/search/:keyword"/>
      </section>
    </div>
  );
}

export default App;
