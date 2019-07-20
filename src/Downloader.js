/* eslint-disable no-console */
/* eslint-disable func-names */
const Wrapper = require('./ApiClient');

const { saveImage } = require('./ImageDownloader');

const reddit = new Wrapper();

exports.downloadImages = async function (name = 'dankmemes', limit = 25, rel = 'hot') {
  try {
    const dat = await reddit.getFromSubReddit(name, limit, rel);
    const posts = dat.data.children;
    posts.forEach(async (post, i) => {
      await saveImage(post.data.url, `${__dirname}/images/image-${i + 1 + (Math.floor(Math.random() * 665))}`);
    });
  } catch (e) {
    console.error(e);
  }
};
