'use strict'
require('dotenv').config()
const axios = require('axios');

const authSlackContxt = (clientID, clientSECRET) => {
    var urlParams = new URLSearchParams(window.location.search);
    var params = Object.fromEntries(urlParams.entries());
    var code = params.code;
    if (code) {
        let webhook_url = axios
            .post(
                "https://slack.com/api/oauth.v2.access",
                new URLSearchParams({
                    code,
                    client_id: clientID,
                    client_secret: clientSECRET,
                }).toString(),
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            )
            .then((res) => {
                console.log("token data ", res.data.incoming_webhook.url);
                // webhook_url = res.data.incoming_webhook.url;
                return res.data.incoming_webhook.url;
            })
            .catch((e) => {
                console.log('auth error ', e);
            });
        return webhook_url;
    } else {
        console.log("no code");
    }
}

//send mssg
const sendMssg = (webhook) => {
    console.log(webhook);
    axios.post(`${webhook}`, {
        text: 'join to attend',
        "attachments": [
            {
                "text": "click to open in browser",
                "actions": [
                    {
                        "name": "daily meet",
                        "text": "Chess",
                        "type": "button",
                        "url": "https://meet.google.com/cka-sqrx-gyn",
                    },
                ]
            }]
    }).then(function () {
        console.log('mssg send successfully');
    })
        .catch(function (error) {
            console.log(error);
        });
}

module.exports = {
    authSlackContxt,
    sendMssg
}
