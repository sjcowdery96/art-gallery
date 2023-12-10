import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'

//import our homemade components
import Gallery from './Gallery'
import ButtonBar from './ButtonBar'

//test changea
function App() {
  let endPath = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'
  //sets the initial state as blank
  let [artID, setArtID] = useState(1);
  let [artData, setArtData] = useState([])

  useEffect(() => {
    document.title = "Welcome to Gallery #" + artID
    fetch(endPath + artID)
      .then(response => response.json())
      .then(resData => setArtData(resData))
  }, [artID])

  //handles our iteration from child component, ButtonBar
  const handleIterate = (e) => {
    // We still want to eliminate the default behavior of our form submittal
    e.preventDefault()
    //sets the art ID to be the value of the target
    setArtID(artID + Number(e.target.value))
  }

  //define a fun function to create a random artID
  const handleRandom = (e) => {
    // We still want to eliminate the default behavior of our form submittal
    e.preventDefault()
    // create a random value to jump to between 1-3000
    setArtID(Math.floor(Math.random() * 3000) + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Gallery artData={artData}>
          </Gallery>
          <ButtonBar handleIterate={handleIterate} handleRandom={handleRandom}>
          </ButtonBar>
        </div>
      </header>

    </div>
  );
}

export default App;
