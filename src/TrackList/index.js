import React from "react";
import Track from "../Track"


class  TrackList extends React.Component {

    render() {

        const {songList, togglePlayListTrack} = this.props;

        return (
            <div> 
            <h1>Results</h1>
            {
                songList.map(song => (

                    <>                     
                   <Track
                   key={song.id}
                   togglePlayListTrack={togglePlayListTrack}
                   song={song}  
                   
                   ></Track>
                   </>
                )
                )
            }

            </div>
        )
    }    
}

export default TrackList;