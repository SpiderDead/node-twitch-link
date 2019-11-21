const rp = require('request-promise');

const typeNameUrl = {
  video : "vods",
  stream : "channels",
}

/**
 * Retrieve twitch access_token for a stream/vod
 * @param {String} type
 * @param {String} videoName/videoID
 * @param {Object} tokenObj (must contain 'client_id' AND/OR 'oauth_token')
 * @return {Promise}
 */
async function getAccessToken(type, videoID) {
  let queryParam = {
    uri: 'https://api.twitch.tv/api/' + typeNameUrl[type] + '/' + videoID + '/access_token?need_https=true&oauth_token=&platform=web&player_backend=mediaplayer&player_type=site',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36',
      'Client-ID': 'kimne78kx3ncx6brgo4mv6wki5h1ko',
      'Accept': 'application/vnd.twitchtv.v5+json',
      'Sec-Fetch-Mode': 'cors',
      'Accept-Language': 'en-us',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36',
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept': 'application/vnd.twitchtv.v5+json; charset=UTF-8',
      'Referer': 'https://www.twitch.tv/jerma985',
      'X-Requested-With': 'XMLHttpRequest',
    },
    json: true
  };

  let r = rp(queryParam);

  await r.catch((err) => {
    console.log({err})
  });

  return r;
};

module.exports = getAccessToken;
