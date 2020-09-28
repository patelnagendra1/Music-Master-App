import React,{ useState} from 'react'



function Search(props){

const [artistquery,setartistquery] = useState("");

   

  function handelInput(event){
    setartistquery(event.target.value)
   
  }

  function handleKeyPress(event){
    if(event.key==='Enter')
    SeacrhArtist()
  }

  function SeacrhArtist(){
    props.SeacrhArtist(artistquery)
  }


  return(
      <div>
          <input 
            onChange = {handelInput}
            onKeyPress={handleKeyPress}
            placeholder="Search for an artist"
         />
        <button onClick = {SeacrhArtist} >Search</button>
      </div>
  )

}

export default Search