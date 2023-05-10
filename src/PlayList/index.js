import React from "react";
import Track from "../Track"
import injectContext from "../Context/injectContext";



class PlayList extends React.Component {

 

    render () {    
        const {togglePlayListTrack, playList, reNamePlayList, onSavePlayList, context} = this.props;

        
        const deezerConnect = async () => {
            await context.redirectToDeezer();
        }


        const savePlayListDeezer =  async () => {   
             if(context.tokenExist) {
                await onSavePlayList();
            }

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
            
            {
                Boolean(context.tokenExist) ? (
                    <button onClick={savePlayListDeezer}>Save PlayList</button>
                ) : (
                    <button onClick={deezerConnect}>Connect with Deezer</button>
                )
            }

            </div>
        )

    }

    
}

export default injectContext(PlayList);