# node-twitch-link
Node.JS library used to get direct link to a twitch stream/vod

```js
// Get VOD links
const getTwitchLink = require('node-twitch-link')

// Both client_id and oauth_token work here
//
// For some channel, you may need to be authenticated (via user's oauth_token)
// to retrieve VOD links
let tokenObj =  {
  oauth_token:"qudb4p4qdq858tuo25z6q9z8eq5z4qad",
};

getTwitchLink("video", "100217285", tokenObj).then(function(linkArray){
  console.log(linkArray);
}).catch(function(err){
  console.log(err);
});
```

```js
// Get stream feed links
const getTwitchLink = require('node-twitch-link')

// Both client_id and oauth_token work here
//
// For some channel, you may need to be authenticated (via user's oauth_token)
// to retrieve source feed link
let tokenObj =  {
  client_id:"utbs189usp16gdzdzi11seifqzevp",
};

getTwitchLink("channel", "faceittv", tokenObj).then(function(linkArray){
  console.log(linkArray);
}).catch(function(err){
  console.log(err);
});
```

## Installation

```bash
$ npm install BernardJeremy/node-twitch-link
```

## Features

  * Retrieve direct links for twitch stream/vod
  * Retrieve every quality available
  * Work with client_id and/or oauth_token
  * Using OAuth, even protected vods/feeds are reachable

## Twitch API Informations

  * How to setup a `client_id` : [Twitch API Authentication Guide - Register your app](https://github.com/justintv/Twitch-API/blob/master/authentication.md#developer-setup)
  * How to connect via `oauth_token` : [Twitch API Authentication Guide - Connect via OAuth](https://github.com/justintv/Twitch-API/blob/master/authentication.md#getting-access-tokens)
