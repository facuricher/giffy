import './App.css';
import { Link, Route } from "wouter"
import Home from "./pages/Home/index"
import SearchResult from  "./pages/SearchResult/index"
import Detail from "./pages/Detail/index"
import StaticContex from './contex/StaticContext';
import { GifsContextProvider } from './contex/GifsContext';

function App() {

  return (
    <StaticContex.Provider>
      <div className="App">
        <section className="App-content">
          <Link to='http://localhost:3000/'>
            <figure className='App-logo'>
              <img alt='logo giffy' src='https://media.discordapp.net/attachments/883179011470131202/929850539955613766/blogeate.png'/>
            </figure>
          </Link>
          <GifsContextProvider>
            <Route 
              component={Home}
              path="/"
            />
            <Route 
              component={SearchResult}
              path="/search/:keyword"
            />
            <Route
              component={Detail}
              path="/gif/:id"
            />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContex.Provider>
  );
}

export default App;
