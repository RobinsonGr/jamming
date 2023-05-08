import React from "react";
import Track from "../Track"
import injectContext from "../Context/injectContext";



class PlayList extends React.Component {

 

    render () {    
        const {togglePlayListTrack, playList, reNamePlayList, onSavePlayList, context} = this.props;

        
       const savePlayListDeezer =  async () => {

        context.redirectToDeezer()

        }
        
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
            <button onClick={savePlayListDeezer}>Save PlayList</button>
            </div>
       
        )

    }

    
}

export default injectContext(PlayList);