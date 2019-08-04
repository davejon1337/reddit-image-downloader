/* eslint-disable no-new */
/* eslint-disable func-names */
const axios = require('axios');
const fs = require('fs');

exports.saveImage = async function (url, path) {
  try {
    const arr = url.split('/');
    const lastInd = arr.length - 1;
    const filename = arr[lastInd];
    const res = await axios({
      url,
      responseType: 'stream',
    });
    res.data.pipe(fs.createWriteStream(`${path}/${filename}`))
      .on('finish', () => {
        console.log(`*****----------- Image downloaded as ${filename} -----------*****`);
      }).on('error', (e) => {
        console.log('*****----------- Download failed -----------*****');
      });
  } catch (e) {
    console.log('*****----------- Download failed -----------*****');
  }
};
