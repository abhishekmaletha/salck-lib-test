<template>
  <a
    href="https://slack.com/oauth/v2/authorize?client_id=2535020833490.2640967681488&scope=channels:join,chat:write,chat:write.public,incoming-webhook,app_mentions:read,chat:write.customize&user_scope="
    target="_blank"
    ><img
      alt="Add to Slack"
      height="40"
      width="139"
      src="https://platform.slack-edge.com/img/add_to_slack.png"
      srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
  /></a>
</template>

<script>
// const axios = require("axios");
import { authSlackContxt } from "../slack-contxt";
export default {
  name: "HelloWorld",
  data: function () {
    return {
      webhook: "",
    };
  },
  props: {
    msg: String,
  },
  methods: {},
  mounted() {
    console.log("auth", authSlackContxt());
    // console.log("webhook", this.webhook);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
