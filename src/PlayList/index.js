import React from "react";
import Track from "../Track"



class PlayList extends React.Component {

 

    render () {


    
        const {togglePlayListTrack, playList, reNamePlayList, onSavePlayList} = this.props;

       

        return(
          
            <div> 
            <input onChange={reNamePlayList}></input>
        

            {
                playList.map(song => (
                    
                   <Track
                   key={song.id}
                   togglePlayListTrack={togglePlayListTrack}
                   song={song}
                   ></Track>
                )
                )
            }
            <button onClick={onSavePlayList}>Save PlayList</button>
            </div>
       
        )

    }

    
}

export default PlayList;