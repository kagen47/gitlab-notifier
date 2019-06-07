import {ChromeStorageClient} from "./chrome-storage-client";

const axios = require('axios');
const moment = require('moment')

const GITLAB_URL_KEY = "gitLabUrl";
const PRIVATE_TOKEN_KEY = "privateToken";
const CREATED_AT_KEY = "lastUpdateDate";

const CREATED_AT = "created_at"

export class GitLabClient {

    constructor() {
        this.chromeStorageClient = new ChromeStorageClient();
    }

    async getGitLabUrl() {
        const data = await this.chromeStorageClient.get()
        return data[GITLAB_URL_KEY]
    }

    async setGitLabUrl(gitLabUrl) {
        return await this.chromeStorageClient.set(GITLAB_URL_KEY, gitLabUrl)
    }

    async getPrivateToken() {
        const data = await this.chromeStorageClient.get()
        return data[PRIVATE_TOKEN_KEY]
    }

    async setPrivateToken(privateToken) {
        return await this.chromeStorageClient.set(PRIVATE_TOKEN_KEY, privateToken)
    }

    async getLastCreatedAt() {
        const data = await this.chromeStorageClient.get()
        return data[CREATED_AT_KEY]
    }

    async setLastCreatedAt(createdAt) {
        return await this.chromeStorageClient.set(CREATED_AT_KEY, createdAt)
    }

    async getBaseRequestUrl() {
        const gitLabUrl = await this.getGitLabUrl()
        return gitLabUrl + '/api/v4'
    }

    async getNewestTodo() {
        const requestBaseUrl = await this.getBaseRequestUrl()
        const todos = await axios.get(requestBaseUrl + '/todos', {
            headers: {
                'PRIVATE-TOKEN': await this.getPrivateToken()
            },
            params: {
                'per_page': '1'
            }
        })

        const newestTodo = todos.data[0]

        const isNewTodo = await this.isNewTodo(newestTodo)
        if (isNewTodo) {
            await this.setLastCreatedAt(todo.created_at)
        }

        return newestTodo
    }

    async isNewTodo(todo) {
        const lastCreatedAt = await this.getLastCreatedAt()
        const createdAt = todo.created_at

        lastCreatedAt === undefined || moment(createdAt).isAfter(moment(lastCreatedAt))
    }
}