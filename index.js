import wrapper from './src/ApiWrapper';
import axios from 'axios';
import fs from 'fs';
import { saveImage } from './src/helper';

const reddit = new wrapper();

async function downloadImages() {
    try {
        const dat = await reddit.searchSubReddit('area', 'DeepFriedMemes');
        const posts = dat.data.children;
        posts.forEach(async (post, i) => {
            await saveImage(post.data.url, `images/image-${i + 1 + (Math.floor(Math.random() * 665))}`);
        })
    } catch (e) {
        console.log(e);
    }
}

downloadImages();