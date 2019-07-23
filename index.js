#!/usr/bin/env node
/* eslint-disable func-names */
const program = require('commander');
const { downloadImages, downloadQueryImages } = require('./src/Downloader');


program
  .version('0.4.5')
  .description('A CLI/Script to download images from reddit using its API.');

program
  .command('sub [name]')
  .description('Download 25 images from a subreddit by relevance hot.')
  .alias('s')
  .action(async (name) => {
    try {
      await downloadImages(name);
    } catch (e) {
      console.log(e);
    }
  });

program
  .command('sublr <subname> <limit> <rel>')
  .alias('a')
  .description('Download custom no of images from a subreddit by custom relevance')
  .action(async (subname, limit, rel) => {
    try {
      await downloadImages(subname, Number(limit), rel);
    } catch (e) {
      console.log('*****----------- Download has failed -----------*****');
    }
  });

program
  .command('query <searchquery> <subredditname> <limit> <rel>')
  .alias('q')
  .description('Search posts that match the query from a subreddit.')
  .action(async (query, subname, limit, rel) => {
    try {
      console.log(query);
      await downloadQueryImages(query, subname, Number(limit), rel);
    } catch (e) {
      console.log('*****----------- Download has failed -----------*****');
    }
  });

program.parse(process.argv);
