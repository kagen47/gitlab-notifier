import {ChromeStorageClient} from "./chrome-storage-client";
// import axios from 'axios';

const GITLAB_URL_KEY = "gitLabUrl";
const PRIVATE_TOKEN_KEY = "privateToken";

export class GitLabClient {

    constructor() {
        this.chromeStorageClient = new ChromeStorageClient();
    }

    async getGitLabUrl() {
        const data = await this.chromeStorageClient.get()
        return data[GITLAB_URL_KEY]
    }

    async getPrivateToken() {
        const data = await this.chromeStorageClient.get()
        return data[PRIVATE_TOKEN_KEY]
    }

    async setGitLabUrl(gitLabUrl) {
        return await this.chromeStorageClient.set(GITLAB_URL_KEY, gitLabUrl)
    }

    async setPrivateToken(privateToken) {
        return await this.chromeStorageClient.set(PRIVATE_TOKEN_KEY, privateToken)
    }

    async getTodos() {

    }

}