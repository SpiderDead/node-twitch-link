const getAccessToken = require('./lib/getAccessToken');
const getM3U8FromUsher = require('./lib/getM3U8FromUsher');
const M3U8Parser = require('./lib/parseM3U8');

/**
 * Retrieve direct links for a twitch stream/vod
 * @param {String} type
 * @param {String} videoName/videoID
 * @param {Object} tokenObj (must contain 'client_id' AND/OR 'oauth_token')
 * @return {Promise}
 */
function getTwitchLink(type, videoID, tokenObj) {
  return new Promise(function(resolve, reject) {
    getAccessToken(type, videoID, tokenObj).then(function (ret) {

      getM3U8FromUsher(type, videoID, ret.token, ret.sig).then(function (usher) {

        M3U8Parser(usher).then(function(linkArray){
          resolve(linkArray)
        }).catch(function(err){
          reject(err);
        });

      }).catch(function (err) {
        reject(err);
      });

    }).catch(function (err) {
      reject(err);
    });
  });
}

module.exports = getTwitchLink;
