export class ChromeStorageClient {

    constructor() {
    }

    async get() {
        return new Promise((resolve, reject) => {
            try {
                chrome.storage.sync.get(resolve)
            } catch (error) {
                reject(error);
            }
        })
    }

    async set(key, value) {
        return new Promise((resolve, reject) => {
            try {
                chrome.storage.sync.set({[key]: value}, resolve)
            } catch (error) {
                reject(error)
            }
        })
    }
}