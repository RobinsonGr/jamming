import React from "react"
import Nav from "./Nav";
import TrackList from "./TrackList";
import PlayList from "./PlayList";
import API from "./api";
import getSearch from "./SearchResults";
import SearchBar from "./SearchBar"

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      currentTrackList: [
      ],
      playList: [],
      savePlaylist: {
        name: "",
        tracks: []
      }
    }
  }

  


  render() {
    //TrackList render & state

  const  updateCurrentTrackList = async (e) => {

  const value = e.target.value;

  if (!value) {
    return
  } 

  const requestNewCurrentTrackList= await getSearch(value)

  const newCurrentTrackList = [];
   requestNewCurrentTrackList.map( ({id, title, album, artist}) => {

     newCurrentTrackList.push({
       id: id,
       title: title,
       artist: artist.name,
       album: album.title,
       onPlayList: false,
      })
   })
  
  this.setState(prevState =>  (
   {
       ...prevState,
       currentTrackList: [...newCurrentTrackList],         
      })
   )

  }


// CurrentTrackList to PlayList

  const togglePlayListTrack = (song) => {

  
  
    let currentTrackListModified = [...this.state.currentTrackList];
    let playListModified = [...this.state.playList];
    
    const songInPlayList = playListModified.includes(song);


      if(songInPlayList) {

        currentTrackListModified.push(song) 
        playListModified = playListModified.filter(track => track.title !== song.title);
        song.onPlayList = false;

      } else {

        playListModified.push(song) 
        currentTrackListModified = currentTrackListModified.filter(track => track.title !== song.title);
        song.onPlayList = true;

      }

      this.setState(actualState => ({
        currentTrackList: currentTrackListModified, 
        playList: playListModified
        })  
      )


  };

 

//Save PlayList custom name in state
  const reNamePlayList = (e) => {

    const currentValue = e.target.value;
    
    this.setState(actualState => {
      return (
        {
          ...actualState,
          savePlayList: {
            ...actualState.savePlayList,
            name: currentValue
          }
        }
      )
    })

  }

  //Save PlayList Tracks in State
  const savePlayList = () => {


    this.setState(actualState => ({
      ...actualState,
      playList: [],
      savePlayList: {
        ...actualState.savePlayList,
        tracks: actualState.playList
      }
    })

    )
    
    console.log(this.state.savePlayList)
    console.log(this.state.playList)

  }

  
    return (
      <>
      <Nav></Nav>
      <SearchBar
        updateCurrentTrackList={updateCurrentTrackList}
      ></SearchBar>
      <TrackList 
      currentTrackList={this.state.currentTrackList} 
      togglePlayListTrack={togglePlayListTrack}
      
      
      />
      <PlayList 
      reNamePlayList={reNamePlayList}
      onSavePlayList={savePlayList}
      playList={this.state.playList} 
      togglePlayListTrack={togglePlayListTrack} />
      <API></API>
      </>
    );

  }
}

export default App;
