/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable func-names */
const homedir = require('os').homedir();
const Wrapper = require('./ApiClient');

const { saveImage } = require('./ImageDownloader');

const reddit = new Wrapper();

exports.downloadImages = async function (name = 'dankmemes', limit = 25, rel = 'hot') {
  try {
    const dat = await reddit.getFromSubReddit(name, limit, rel);
    const posts = dat.data.children;
    posts.forEach(async (post, index) => {
      await saveImage(post.data.url, `${homedir}/Pictures/memes`, index + 1);
    });
  } catch (e) {
    console.log('*****----------- Download has failed -----------*****');
  }
};
