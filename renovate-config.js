// https://docs.renovatebot.com/self-hosted-configuration/
module.exports = {
  branchPrefix: 'repo-stream-renovate/',
  dryRun: true,
  username: 'renovate-release',
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  onboarding: false,
  platform: 'github',
  autodiscover: true,
  autodiscoverFilter: "mondeja/*",
  requireConfig: false,
  logLevel: 'debug',
};