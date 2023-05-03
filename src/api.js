import React from "react";



class API extends React.Component {

    // Initially I thought of using the popstate event Listeneer because in the codeAcademy program  at this point the lifeCycle methods had not yet been seen, much less the useEffect hook. So I finally wanted to go ahead and incorporate the most logical way I had known since before
    componentDidMount() {

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

         const queryParams = new URLSearchParams({
            app_id: API_ID,
            secret: secretKey,
            code: code,
          });
         
         const tokenResponse = await fetch(`http://localhost:5000/get-token?${queryParams.toString()}`, {
             method: "POST",                
            })

        //const token = await tokenResponse.text();
        const token2 = await tokenResponse.json();

        //window.location.href = "/"
       
        console.log(token2.expires);
     }

     
     

    render () {
        return (
            <button onClick={this.redirectToDeezer}> ¡Let's Start!</button>
        )

    }


}


export default API