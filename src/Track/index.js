import React from "react";

class Track extends React.Component{


render () {

  const {song, togglePlayListTrack} = this.props;

  console.log(this.props)

  return (
    <>  
     <div> 
      <h3>{song.title}</h3> 
      <p>{`${song.album} | ${song.artist}`}</p>
      <button
       onClick={() => {togglePlayListTrack(song)}}
      >{Boolean(song.onPlayList) ? "-" : "+"}</button>


    </div>
   </>
)
}
}

export default Track;
