const clientID = "ce8fe0bf98144c88b7de8ac0e165421f";
const redirectUrl = "http://localhost:3000/"

const Spofiy={
    getAccessTocken (){
        if(accesstoken){
            return accesstoken;
        }
        const accessTockenMatch = window.location.href.match(/access_tocken=([^&]*)/);
        const expiresInMatch = window.location.href.match(/espires_in=([^&]*)/);

        if(accessTockenMatch = expiresInMatch){
            accessTockenMatch = accessTockenMatch[1];
            const expiresIn =Number(expiresInMatch[i]);//getting first value
            window.setTimeout(()=>{accesstoken=""},expiresIn * 1000);
            window.history.pushState("Access Token", null, "/");
            return accesstoken;

        }else{
            const access_url = "https://accounts.spotify.com/authorize?client_id=${clientid}&response_type=token&scope=playlist-modify-public&redirect_url=${redirect_uri}";
            window.location = access_url;
        }
    },
    search(term){
        const accessToken = spotufy.getAccessTocken();
        return fetch("https://api.spotify.com/v1/search?type=track&g=${term}",{
            headers:{
                Authorization: 'Bearer ${accessToken}'
            }
        }).then(Response=>{
            return response.json();
        }).then(jsonResponse=>{///ierattiong over the json response and doing a mapping and fetching
            return response.json();
        }).then(jsonResponse =>{
            if(!jsonResponse.tracks){
                return [];
            }return jsonResponse.tracks.items.map(tracks =>{
                id : tracks.id
                name : tracks.name
                artist : tracks.artist
                uri : tracks.uri
            })
        });
       

    },
    savePlaylist(name, trackuri) {
        if(!name || !trackuri){
            return;
        }
        const accessToken = spotify.getAccessTocken();
        const headers = {Authorization: "Bearer ${accessTocken}"};
        let userid;

        return fetch("https://api.spotify.com/vi/users/$users/${userid/playlists}",{
            headers:headers,
            method:"POST",
            body: JSON.stringify({name:name}),
        }).then(response => response.json()).then(jsonResponse =>{
            const playlistid = jsonResponse.id;
            return fetch("https://api.spotify.com/vi/users/$users/${userid}/playlists/${playlistid}/tracks",{
                headers:headers,
                method:"POST",
                body: JSON.stringify({uris:trackuris}),})
        })
    } 
}
export default spotify;