Package.describe({
  name: 'nicolaslopezj:orion-ga',
  summary: 'Google analytics that work with orion config',
  version: '1.0.0',
  git: 'https://github.com/nicolaslopezj/orion-ga'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use(['meteor-platform', 'orionjs:config@1.0.0']);

  api.addFiles('config.js');

  api.addFiles('analytics.js', 'client');

  api.export('GAnalytics', 'client');
});

Package.onTest(function(api) {
});
