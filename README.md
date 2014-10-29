# cordova-parse-push-test

Tests the [cordova-parse-push plugin](https://github.com/soundasleep/cordova-parse-push).

![Screenshot image](https://raw.githubusercontent.com/soundasleep/cordova-parse-push-test/master/screenshot.png)

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
