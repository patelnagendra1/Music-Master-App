import React from 'react'

function Artists({artist}) {
    if(!artist) return null;

    const {name,images,followers,genres} = artist;
    
    return(
        <div>
            <h3>{name}</h3>
            <p>{followers.total} followers</p>
            <p>{genres.join(',')}</p>
            <img src={images[0] && images[0].url}
             alt = 'artist-profilr'
                style = {{
                    width:200,
                    height:200,
                    borderRadius:100,
                    objectFit:'cover'
                }}
           />
        </div>
    )
    
}

export default Artists