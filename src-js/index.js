import {GitLabClient} from './gitlab-client'

const client = new GitLabClient()



client.setGitLabUrl("http://gitlab.cloud.ceres.local")
client.setPrivateToken("PHycJwCFdD3c1_L_hSjN")
client.

client.getNewestTodo().then(todo => {
    if (client.isNewTodo(todo)) {
        chrome.notification.create({
            type: 'basic',
            iconUrl: 'images/gitlab48.png',
            title: 'You have a new Todo!',
            message: todo[]
        })
    }
})

client.getTodoUpdates().then(res => {
        console.log(res)
}).catch(err => {
    console.log(err)
})


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
