const webpush = require('web-push')
const fs = require('fs')

const buffer = fs.readFileSync('./cred.json')
const credentials = JSON.parse(buffer.toString())

webpush.setVapidDetails(credentials.vapid_array[0], credentials.vapid_array[1], credentials.vapid_array[2])

const pushSubscription = {
    endpoint: credentials.endpoint,
    keys: {
        auth: credentials.auth,
        p256dh: credentials.p256dh
    }
}

// As per my serviceworker configurations
const payload = '{"msg":"Hi KP", "url": ""}'

webpush.sendNotification(pushSubscription, payload).then((resp) => {
    console.log(resp)
})