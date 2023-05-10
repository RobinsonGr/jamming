


const token = localStorage.getItem("token")

async function getUserName () {


    const requestName = await fetch(`https://api.deezer.com/user/me?access_token=${token}`);
    const name =  await requestName.json()

    return name
    
    }




async function createRemotePlayList (PlayLisTitle) {

    const name = await getUserName()

    const createPlayList = await fetch(`https://api.deezer.com/user/${name}/playlists`, {
        method: "POST",
        headers: {
            authorization: `Bearer ${token}`,
            "Content-type": "application/json"
            
        }, 
        body: JSON.stringify({
            title: PlayLisTitle,              
        })
    });

    const playListInfo = await createPlayList.json();
    const playListId = await playListInfo.id;

    return playListId;


}


export async function uploadRemotePlayList (tracksId) {

    const playListId = await createRemotePlayList()

    await fetch(`https://api.deezer.com/playlist/${playListId}/tracks`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: JSON.stringify({
    songs: tracksId.join(",")
  })
})

}

