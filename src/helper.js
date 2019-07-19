import axios from 'axios';
import fs from 'fs';

export async function saveImage(url, path) {
    axios({
        url,
        responseType: 'stream',
    }).then(res => {
        new Promise((resolve, reject) => {
            res.data.pipe(fs.createWriteStream(path)).on('finish', () => resolve()).on('error', e => reject(e));
        })
    })
}
