import React from "react";
import Track from "../Track"


class  TrackList extends React.Component {

    render() {

        const {currentTrackList, togglePlayListTrack, } = this.props;

        return (
            <div> 
            <h1>Results</h1>
            {
                currentTrackList.map(song => (

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