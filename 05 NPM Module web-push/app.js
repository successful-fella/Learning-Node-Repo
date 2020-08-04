const webpush = require('web-push')

webpush.setVapidDetails(
    'mailto:preetjuneja@zingalbox.com',
    "public_key",
    "private_key"
)

// I have generated it on client and console logged using Notification API
const pushSubscription = {
    endpoint: 'endpoint_url_to_send_notification',
    keys: {
        auth: '...',
        p256dh: '...'
    }
}

// Custom payload, below is the way my serviceworker parse
webpush.sendNotification(pushSubscription, '{"msg":"Hi KP", "url": ""}').then((resp) => {
    console.log(resp)
})