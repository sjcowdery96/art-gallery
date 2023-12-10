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

  // in App.js
  // send this function down to <ButtonBar />
  const handleIterate = (e) => {
    setArtID(artID + Number(e.target.value))
  }



  const handleRandom = (e) => {
    // We still want to eliminate the default behavior of our form submittal
    e.preventDefault()
    // create a random value to jump to between 1-3000
    let randomID = Math.floor(Math.random() * 3000) + 1
    setArtID(randomID)
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={artData.primaryImage} alt={artData.title} />
        <p>{artData.title} created by {artData.artistDisplayName} in {artData.accessionYear}</p>
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
