# cordova-parse-push-test

Tests cordova-parse-push plugin.

## Installing

```
cd www && bower install

```

To refresh the `cordova-parse-push` plugin from Github

```
node_modules/.bin/cordova plugin rm org.jevon.cordova.parse.pushplugin && node_modules/.bin/cordova plugin add https://github.com/soundasleep/cordova-parse-push --variable PARSE_APP_ID=abc123 --variable PARSE_CLIENT_SECRET=abc123
```

## Running

```
node_modules/.bin/cordova run
```
