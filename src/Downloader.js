
const homedir = require('os').homedir();
const Wrapper = require('./ApiClient');

const { saveImage } = require('./ImageDownloader');

const reddit = new Wrapper();

exports.downloadImages = async function (name = 'dankmemes', limit = 25, rel = 'hot') {
  try {
    const dat = await reddit.getFromSubReddit(name, limit, rel);
    const posts = dat.data.children;
    console.log(`Total Images to Download : ${limit}`);
    posts.forEach(async (post) => {
      await saveImage(post.data.url, `${homedir}/Pictures/memes`);
    });
  } catch (e) {
    console.log('*****----------- Download has failed -----------*****');
  }
};
exports.downloadQueryImages = async function (query, name, limit, rel) {
  try {
    const dat = await reddit.searchSubReddit(query, name, limit, rel);
    const posts = dat.data.children;
    console.log(`Total Images to Download : ${limit}`);
    posts.forEach(async (post) => {
      await saveImage(post.data.url, `${homedir}/Pictures/memes`);
    });
  } catch (e) {
    console.log('*****----------- Download has failed -----------*****');
  }
};
