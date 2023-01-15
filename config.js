var config = module.exports = {};
config.disqus = {};
config.slack = {};

// Number of seconds between each check (optional, default 60).
config.interval = process.env.SLACKUS_INTERVAL;

// The number of recent comments to check (optional, default 25, max 100).
config.disqus.limit = process.env.SLACKUS_DISQUS_LIMIT;

// Disqus forum to check, specified by its shortname (required).
// To check multiple forums, enter their shortnames separated by comma.
config.disqus.forums = process.env.SLACKUS_DISQUS_FORUM=lian-scans;

// Disqus authentication (required).
config.disqus.authentication = {
  api_secret: process.env.SLACKUS_DISQUS_API_SECRET=JqVkNpcAp6c6KFNIsetFUygDd683P51oWT4GjqzmF6MWJ2TcLHVMs1fM8efIR8Rg,
  api_key: process.env.SLACKUS_DISQUS_API_KEY=AnxPDNTnmaSN8LfyxSwTgCLOwvkThqedIviemfDI4djmTZY4tAOw60n2xjI7rcVI,
  access_token: process.env.SLACKUS_DISQUS_ACCESS_TOKEN=b32ff84624994c5095413db4f5be8d07,
};

// URL of your Slack Incoming WebHook (required).
// To post to multiple Slack teams, enter the webhook URLs seperated by comma.
config.slack.webhook = process.env.SLACKUS_SLACK_WEBHOOK=https://discord.com/api/webhooks/913648636636848128/BBgTRosvTBbpJ1umT0sTOst8WrEejsRGrclcZ-TN6A-sC1OxvN96TRLP6pamNG87sDot;

// Users to mention in Slack channel when notification arrives, comma separated.
config.slack.mention = process.env.SLACKUS_SLACK_MENTION;

// Additional options for messages posted to Slack (optional).
// Overrides the webhook's settings, see Setup Instructions for your webhook.
config.slack.options = {
  // Some examples:
  // username: 'Santa Claus',
  // icon_emoji: ':santa:',
  // icon_url: 'http://northpole.com/santa.jpg',
  // channel: '#workshop',
  // channel: '@helper',
  // attachments: [ ... ],
};

// Additional options for API requests to Disqus (optional).
// See https://disqus.com/api/docs/posts/list/.
config.disqus.options = {};
