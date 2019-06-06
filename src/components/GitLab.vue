<template>
    <v-form>
        <v-container>
            <v-text-field label="GitLab URL"
                          :value="gitLabUrl"
                          :loading="isLoading"></v-text-field>
            <v-text-field label="Personal Access Token"
                          :value="privateToken"
                          :loading="isLoading">
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
                isLoading: true,
                gitLabUrl: "",
                privateToken: ""
            }
        },
        methods: {
            getGitLabUrl() {
                this.isLoading = true
                gitLabClient.getGitLabUrl().then(gitLabUrl => {
                    this.gitLabUrl = gitLabUrl
                    this.isLoading = false
                })
            }
        },
        created() {
            this.getGitLabUrl()
        }
    }
</script>

<style scoped>
</style>