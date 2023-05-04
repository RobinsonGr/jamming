import React, {useState} from "react"
import Nav from "./Nav";
import TrackList from "./TrackList";
import PlayList from "./PlayList";
import API from "./api";
import getSearch from "./SearchResults";

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      songList: [
        {
          id: 0,
          title: "Lose You To Love Me",
          description: "Rare by Selena Gomez",
          onPlayList: false
        },
        {
          id: 1,
          title: "Blinding Lights",
          description: "After Hours by The Weeknd",
          onPlayList: false
        },
        {
          id: 2,
          title: "Levitating",
          description: "Future Nostalgia by Dua Lipa",
          onPlayList: false
        }
      ],
      playList: {
       name: "",
       tracks: []

      }
    }
  }

  render() {

  const togglePlayListTrack = (song) => {
  
    let songListModified = [...this.state.songList];
    let playListModified = [...this.state.playList.tracks];
    
    const songInPlayList = playListModified.includes(song);


  
      if(songInPlayList) {

        songListModified.push(song) 
        playListModified = playListModified.filter(track => track.title !== song.title);
        song.onPlayList = false;

      } else {

        playListModified.push(song) 
        songListModified = songListModified.filter(track => track.title !== song.title);
        song.onPlayList = true;

      }

      this.setState(actualState => ({
        songList: songListModified, 
        playList: {
          ...actualState.playList,
          tracks: playListModified}
        })  
      )

      getSearch("eminem")

  };

 


  const reNamePlayList = (e) => {

    const currentValue = e.target.value;
    
    this.setState(actualState => {
      return (
        {
          ...actualState,
          playList: {
            ...actualState.playList,
            name: currentValue
          }
        }
      )
    })
  }

  const savePlayList = () => {

    this.setState(actualState => ({
      ...actualState,
      playList: {
        name: "",
        tracks: [],
      }
    })

    )
    
    console.log(this.state.playList)

  }

  const uriList = [
    "1Qrg8KqiBpW07V7PNxwwwL",
    "1wAXODAAL6hY64ZdhrnjBO",
    "6PQ88X9TkUIAUIZJHW2upE",
    "6UelLqGlWMcVH1E5c4H7lY"
  ]


  
    return (
      <>
      <Nav></Nav>
      <p>Hello World</p>
      <TrackList songList={this.state.songList} togglePlayListTrack={togglePlayListTrack}/>
      <PlayList 
      onSavePlayList={savePlayList}
      reNamePlayList={reNamePlayList}
      playList={this.state.playList} 
      togglePlayListTrack={togglePlayListTrack} />
      <API></API>
      </>
    );

  }
}

export default App;
