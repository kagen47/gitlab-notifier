import * as glClient from './gitlabClient'

chrome.browserAction.

chrome.notifications.create({
    type: 'basic',
    iconUrl: 'images/gitlab48.png',
    title: 'test',
    message: 'drink water',
    buttons: [
        {title: 'keep it flowing'}
    ],
    priority: 0
});
