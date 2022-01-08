import {useEffect ,useState } from 'react';
import './App.css';
import Gif from './components/Gif';
import getGifs from './services/getGifs';



function App() {
  const [gifs, setGifs] = useState([])

  useEffect(function(){
  getGifs({keyword: 'bart'}).then(gifs=> setGifs(gifs))

  },[])

  return (
    <div className="App">
      <section className="App-content">
      {
        gifs.map(singleGif => <Gif 
          key={singleGif.url}
          url={singleGif.url}
          title={singleGif.title}
          />)
        
      }
      </section>
    </div>
  );
}

export default App;
