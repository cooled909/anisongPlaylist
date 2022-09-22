require('dotenv').config();
const myURL = new URL('https://accounts.spotify.com/authorize')

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

const axios = require('axios');
const express = require('express');
const app = express();
const port = 8888;

const generateRandomString = length => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  const stateKey = 'spotify_auth_state'

app.get('/login', (req, res) => {
    const state = generateRandomString(16);
    res.cookie(stateKey, state);

    const scope = 'playlist-modify-public'

    myURL.searchParams.append('client_id', CLIENT_ID);
    myURL.searchParams.append('response_type', 'code');
    myURL.searchParams.append('redirect_uri', REDIRECT_URI);
    myURL.searchParams.append('state', state);
    myURL.searchParams.append('scope', scope);

    res.redirect(myURL.href);
});

app.get('/callback', (req, res) => {
    const code = req.query.code || null;

    const newSearchParams = new URLSearchParams();
    newSearchParams.append('grant_type', 'authorization_code');
    newSearchParams.append('code', code);
    newSearchParams.append('redirect_uri', REDIRECT_URI);

    axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        data: newSearchParams.toString(),
        headers: {
            'content_type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
        }
    })
    .then(response => {
        if(response.status === 200){
            const { access_token, refresh_token } = response.data;

            const queryParams = new URLSearchParams();
            queryParams.append('access_token', access_token);
            queryParams.append('refresh_token', refresh_token);

            res.redirect(`http://localhost:5173/auth?${queryParams.toString()}`);

        } else {
            res.send(response);
        }
    })
    .catch(error => {
        res.send(error);
    })

});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});