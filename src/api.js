import React from "react";



class API extends React.Component {

    // Initially I thought of using the popstate event Listeneer because in the codeAcademy program  at this point the lifeCycle methods had not yet been seen, much less the useEffect hook. So I finally wanted to go ahead and incorporate the most logical way I had known since before
    componentDidMount() {

        const requestToken = "https://connect.deezer.com/oauth/access_token.php?app_id="

        const queryParameters = new URLSearchParams(window.location.search);

        if(queryParameters.has("code")) {

           const authCode = queryParameters.get("code")
           this.getToken(authCode);

        } else {

        }
    }

     redirectToDeezer = () => {
        const app_id = 601224 ;
        const redirect_uri = "http://localhost:3000/";
        const authURL= `https://connect.deezer.com/oauth/auth.php?app_id=${app_id}&redirect_uri=${redirect_uri}`
        //To start a new tab
        window.location.href = authURL;
     }


     async getToken (authCode) {

        const API_ID = 601224;
        const secretKey = "65b477d68d855adee8b009895c18c152";
        const code = authCode;

        const tokenResponse = await fetch("https://cors-anywhere.herokuapp.com/https://connect.deezer.com/oauth/access_token.php?", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `app_id=${API_ID}&secret=${secretKey}&code=${code}`

        })
        const token = await tokenResponse.json()


        console.log("token:" + token)
     }

        

    
    render () {
        return (
            <button onClick={this.redirectToDeezer}> ¡Let's Start!</button>
        )

    }


}


export default API