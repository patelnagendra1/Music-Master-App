import React,{useState}  from 'react'


function Tracks({tracks}){

    const [playing,setplaying]=useState(false)
    const [newaudio,setnewaudio]=useState(null);
    const [palyingPreviewUrl,setpalyingPreviewUrl]=useState(null)

   

    const playAudio = previewUrl  => () => {
        const audio = new Audio(previewUrl);

        if(!playing)
        {
            audio.play()
            setplaying(true)
            setnewaudio(audio)
            setpalyingPreviewUrl(previewUrl)
        }
        else{
            newaudio.pause();

            if(palyingPreviewUrl===previewUrl)
                setplaying(false)
            else{
                audio.play()
                setnewaudio(audio)
                setpalyingPreviewUrl(previewUrl)
            }
        }
        
    }

    function trackIcon(track) {

        if(!track.preview_url){
            return <span>NA</span>
        }

        if(playing && (palyingPreviewUrl === track.preview_url))
        {
            return <span>||</span>
        }
        return <span>&#9654;</span>;
    }

    return(
        <div>
            {
                tracks.map(track => {
                    const {id,name,album,preview_url} = track
                    return (
                        <div 
                            key={id} 
                            onClick={playAudio(preview_url)}
                            className="track"
                        >
                            <img 
                                src={album.images[0].url} 
                                alt="track-image" 
                                className="track-image"
                            />
                            <p className="track-text">{name}</p>
                            
                            <p className="track-icon">{trackIcon(track)}</p>
                        </div>
                    )
                })
            }
        </div>   
    )
}

export default Tracks