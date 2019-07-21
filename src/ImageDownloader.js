/* eslint-disable no-new */
/* eslint-disable func-names */
const axios = require('axios');
const fs = require('fs');

exports.saveImage = async function (url, path, index) {
  try {
    const arr = url.split('/');
    const lastInd = arr.length - 1;
    const filename = arr[lastInd];
    axios({
      url,
      responseType: 'stream',
    }).then((res) => {
      new Promise((resolve, reject) => {
        res.data.pipe(fs.createWriteStream(`${path}/${filename}`))
          .on('finish', () => {
            console.log(`*****----------- Image has been downloaded as ${filename} -----------*****`);
            console.log(`*****----------- Total Downloaded  ${index} -----------*****`);
            resolve();
          }).on('error', (e) => {
            console.log('*****----------- Download has failed -----------*****');
            reject();
          });
      });
    });
  } catch (e) {
    console.log('*****----------- Download has failed -----------*****');
  }
};
