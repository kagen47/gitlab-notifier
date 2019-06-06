// import axios from 'axios';

const GITLAB_URL_KEY = "gitlabUrl";
const PRIVATE_TOKEN_KEY = "privateToken";

export class GitLabClient {

    constructor() {
    }

    async getChromeStorageData(key) {
        return new Promise((resolve, reject) => {
            try {
                chrome.storage.sync.get(key, resolve)
            } catch (error) {
                reject(error);
            }
        })
    }

    async setChromeStorageData(key, value) {
        return new Promise((resolve, reject) => {
            try {
                chrome.storage.sync.set({[key]: value}, resolve)
            } catch (error) {
                reject(error)
            }
        })
    }

    async getGitLabUrl() {
        return await this.getChromeStorageData(GITLAB_URL_KEY)
    }

    async getPrivateToken() {
        return await this.getChromeStorageData(PRIVATE_TOKEN_KEY)
    }

    async setGitLabUrl(gitLabUrl) {
        return await this.setChromeStorageData(GITLAB_URL_KEY, gitLabUrl)
    }

    async setPrivateToken(privateToken) {
        return await this.setChromeStorageData(PRIVATE_TOKEN_KEY, privateToken)
    }

    async getTodos() {

    }

}