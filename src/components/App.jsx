import React, {useEffect, useState } from 'react';
import Artists from './Artists'
import Tracks from './Tracks'
import Search from './Search'


const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com'

function App() {


  const [artist,setartist]=useState(null);
  const [tracks,settracks] = useState([]);

  useEffect(() =>{

    return SeacrhArtist("Arjit")
   },[]); 


  function SeacrhArtist(artistquery){

    fetch(`${API_ADDRESS}/artist/${artistquery}`)
    .then(res => res.json())
    .then(
      (result) => {

        if(result.artists.total > 0)
        {
         
            const artist = result.artists.items[0];
            setartist(artist)

            fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
            .then(res => res.json())
            .then(
              (toptracks) => {
                settracks(toptracks.tracks)
                
              },
              (error) => {
                setError(error);
              }
            )
        }

      }, 
      (error) => {
        setError(error);
      }
    )
    

  }

    return (
      <div>
        <h2>Music Master</h2>
        <Search 
          SeacrhArtist={SeacrhArtist}
        />
        <Artists 
          artist={artist}
        />
        <Tracks 
          tracks={tracks}
        />
      </div>
    );
}

export default App;
