import {GitLabClient} from './gitlab-client'

const client = new GitLabClient()

client.setGitLabUrl("this is a gitlab url")

chrome.notifications.create({
    type: 'basic',
    iconUrl: 'images/gitlab48.png',
    title: 'testing',
    message: 'drink water',
    buttons: [
        {title: 'keep it flowing'}
    ],
    priority: 0
});
