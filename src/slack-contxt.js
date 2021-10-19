'use strict'
require('dotenv').config()
const axios = require('axios');

const authSlackContxt = () => {
    var urlParams = new URLSearchParams(window.location.search);
    var params = Object.fromEntries(urlParams.entries());
    var code = params.code;
    //console.log(code);
    if (code) {
        const clientID = `${process.env.VUE_APP_SLACK_CLIENT_ID}`;
        const clientSECRET = `${process.env.VUE_APP_SLACK_CLIENT_SECRET}`;
        // console.log('in lib ', code)
        // console.log('in lib ', clientID)
        // console.log('in lib ', clientSECRET)
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
                return res.data;
            })
            .catch((e) => {
                console.log('auth error ', e);
            });
        return webhook_url;
    } else {
        console.log("no code");
    }
}
module.exports = {
    authSlackContxt
}
