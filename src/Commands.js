/* eslint-disable func-names */
const program = require('commander');

const { downloadImages } = require('./Downloader');

program
  .version('0.0.2');

program
  .command('sub [name]')
  .description('Download 25 images from a subreddit by relevance hot.')
  .alias('s')
  .action(async (name) => {
    try {
      await downloadImages(name);
    } catch (e) {
      console.log('rrrdsa');
    }
  });


// program.on('--help', () => {
//   console.log('');
//   console.log('Examples:');
//   console.log('  $ custom-help --help');
//   console.log('  $ custom-help -h');
// });

program.parse(process.argv);
