import { get } from 'axios';

class ApiWrapper {
    constructor() {
        this.BASE_URL = 'https://www.reddit.com';
    }

    async getDataFormApi(url) {
        const res = await get(url);
        return res.data;
    }

    async getFromSubReddit(subReddit = 'dankmemes', limit = 25, relevence = 'hot') {
        try {
            const url = `${this.BASE_URL}/r/${subReddit}.json?limit=${limit}&sort=${relevence}`;
            return await this.getDataFormApi(url);
        } catch (e) {
            console.log(e);
        }
    }

    async searchSubReddit(query, subReddit = 'dankmemes', limit = 25, relevence = 'hot') {
        try {
            const url = `${this.BASE_URL}/r/${subReddit}/search.json?q=${query}&limit=${limit}&sort=${relevence}`;
            return await this.getDataFormApi(url);
        } catch (e) {
            console.log(e);
        }
    }

}

export default ApiWrapper;