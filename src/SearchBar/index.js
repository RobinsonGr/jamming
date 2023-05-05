import React from "react"


class SearchBar extends React.Component {






    render() {




        return (
            <input onChange={this.props.updateCurrentTrackList}></input>
        )
        
    }
}

export default SearchBar;