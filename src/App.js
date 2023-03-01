import './App.css';
import Music from './Music';
import { useState } from 'react'

async function fetchAPI(music_artist){
  const musicRequest = await fetch(`/music/${music_artist}`)
  return await musicRequest.json()
}


function App() {
  const [music_artist, setMusicArtist] = useState('')
  const [data, setData] = useState([])
  return (
    <div className="App">
      <div class="row">
        <div class="heading">Top 6 Music</div>
      </div>
      <br/>

      <div class="wrap">
        <div class="search">
            <input type="text" class="searchTerm" placeholder="Artist Name" onChange={e => setMusicArtist(e.target.value)}/>
            <button type="submit" class="searchButton" onClick={(e)=> {
              fetchAPI(music_artist).then(json => setData(json))
              e.preventDefault()
            }}>
              <i class="fa fa-search">Search</i>
          </button>
        </div>
      </div>
      <div className='to-center'>
        <Music data={data} />
      </div>
    </div>
  );
}

export default App;
