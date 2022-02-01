import './App.css';
import { Route } from "wouter"
import Home from "./pages/Home/index"
import SearchResult from  "./pages/SearchResult/index"
import Detail from "./pages/Detail/index"
import StaticContex from './contex/StaticContext';
import { GifsContextProvider } from './contex/GifsContext';

function App() {

  return (
    <StaticContex.Provider value={{
      name:"facu richer",
      hola: true
    }}>
      <div className="App">
        <section className="App-content">
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
