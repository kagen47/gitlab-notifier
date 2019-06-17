import {GitLabClient} from './gitlab-client'

const client = new GitLabClient()



client.setGitLabUrl("http://gitlab.cloud.ceres.local")
client.setPrivateToken("PHycJwCFdD3c1_L_hSjN")

client.getNewestTodo().then(todo => {
    if (client.isNewTodo(todo)) {
        console.log(todo)
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'images/gitlab48.png',
            title: 'You have a new Todo!',
            message: "todo"
        })
    }
}).catch(err => {
    console.log(err)
    chrome.browserAction.setBadgeText({
        text: "x"
    })
})
try {
    chrome.storage.sync.get(result => {
        console.log("Got chrome storgae!!!!")
        console.log(result)
    })
} catch (err) {
    console.log(err)
}

// client.getTodoUpdates().then(res => {
//         console.log(res)
// }).catch(err => {
//     console.log(err)
// })


// chrome.notifications.create({
//     type: 'basic',
//     iconUrl: 'images/gitlab48.png',
//     title: 'testing',
//     message: 'drink water',
//     buttons: [
//         {title: 'keep it flowing'}
//     ],
//     priority: 0
// });
