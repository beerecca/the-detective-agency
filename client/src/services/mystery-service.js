export default class MysteryService {
    constructor(options = {}) {
        this.baseUrl = process.env.API_BASE_URL || 'http://localhost:5000'
    }

    getMysteries() { //should be async await
        return fetch('/mysteries') //should have base url
        .then(res => res.json())
        // .catch(err => console.error(err))
    }
}