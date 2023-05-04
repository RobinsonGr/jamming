


async function getSearch(query) {

    const requestList = await fetch(`https://api.deezer.com/search?q=${query}`)

    const responseList = await requestList.json();
    const trackList = responseList.data.slice(0,8)

    console.log(trackList)

   


}

export default getSearch;