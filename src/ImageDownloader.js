/* eslint-disable no-new */
/* eslint-disable func-names */
const axios = require('axios');
const fs = require('fs');

exports.saveImage = async function (url, path) {
  try {
    axios({
      url,
      responseType: 'stream',
    }).then((res) => {
      new Promise((resolve, reject) => {
        res.data.pipe(fs.createWriteStream(path)).on('finish', () => {
          console.log('*****-------------------- Image has been downloaded --------------------*****')
          resolve();
        }).on('error', (e) => {
          reject(e);
        });
      });
    });
  } catch (e) {
    console.log(e);
  }
};

exports.saveToJson = async function saveToJson(url) {
  return url;
};
