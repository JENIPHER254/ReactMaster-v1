const clientID = "ce8fe0bf98144c88b7de8ac0e165421f";
const redirectUri = "http://localhost:3000/";
let accessToken;

const spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) { // Fixed the condition here
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
    },
    async search(term) {
        const accessToken = spotify.getAccessToken(); // Changed `spotify` to `this`
        const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, { // Changed 'g' to 'q'
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        const jsonResponse = await response.json(); // Await the response.json()
        if (!jsonResponse.tracks) {
            return [];
        }
        return jsonResponse.tracks.items.map(track => ({ // Return an object instead of code block
            id: track.id,
            name: track.name,
            artist: track.artists[0].name, // Assuming you want the first artist
            uri: track.uri
        }));
    },
    savePlaylist(name, trackUris) { // Changed `trackuri` to `trackUris`
        if (!name || !trackUris.length) { // Changed `trackuri` to `trackUris`
            return;
        }
        const accessToken = spotify.getAccessToken(); // Changed `spotify` to `this`
        const headers = { Authorization: `Bearer ${accessToken}` }; // Changed `accessTocken` to `accessToken`
        let userId;

        return fetch('https://api.spotify.com/v1/me', { headers: headers }
        ).then(response => response.json()
        ).then(jsonResponse => {
            userId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({ name: name })
            }).then(response => response.json()
            ).then(jsonResponse => {
                const playlistId = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({ uris: trackUris }) // Changed `uri` to `uris`
                });
            });
        });
    }
};

export default spotify; // Changed `spofiy` to `spotify`
