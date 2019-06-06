<template>
    <v-form>
        <v-container>
            <v-text-field label="GitLab URL"
                          :value="gitLabUrl"
                          :loading="isLoadingGitLabUrl"></v-text-field>
            <v-text-field label="Personal Access Token"
                          :value="privateToken"
                          :loading="isLoadingPrivateToken"
                          type="Password">
            </v-text-field>
        </v-container>
    </v-form>
</template>

<script>
    import {GitLabClient} from "../../src-js/gitlab-client";

    const gitLabClient = new GitLabClient()

    export default {
        name: "GitLab",

        data() {
            return {
                isLoadingGitLabUrl: true,
                gitLabUrl: "",
                isLoadingPrivateToken: true,
                privateToken: "dfaaaad"
            }
        },
        methods: {
            getGitLabUrl() {
                this.isLoadingGitLabUrl = true
                gitLabClient.getGitLabUrl().then(gitLabUrl => {
                    this.gitLabUrl = gitLabUrl
                    this.isLoadingGitLabUrl = false
                })
            },
            getPrivateToken() {
                this.isLoadingPrivateToken = true
                gitLabClient.getPrivateToken().then(privateToken => {
                    this.privateToken = privateToken
                    this.isLoadingPrivateToken = false
                })
            }
        },
        created() {
            this.getGitLabUrl()
            this.getPrivateToken()
        }
    }
</script>

<style scoped>
</style>