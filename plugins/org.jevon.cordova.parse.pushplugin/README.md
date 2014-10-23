# cordova-parse-push

A Javascript interface between [Parse push notifications](https://www.parse.com/apps/quickstart?onboard=#parse_push/android/new) and [Apache Cordova](http://cordova.apache.org/) (and [probably Phonegap too](http://stackoverflow.com/questions/18174511/is-there-a-difference-between-phonegap-and-cordova-commands)).

Only implemented on Android so far... probably possible to add iOS support.

Based on [hazemhagrass/push-parse](https://github.com/hazemhagrass/push-parse) and [avivais/phonegap-parse-plugin](https://github.com/avivais/phonegap-parse-plugin).

## Installation

```
cordova plugin add https://github.com/soundasleep/cordova-parse-push
```

Then use the plugin once Cordova has completed loading everything:

```
document.addEventListener("deviceready", function() {
	parsePushPlugin.initialize("testId", "testKey", 
		function(success) { 
			alert("success: " + success);
		}, function(failure) {
			alert("failure: " + failure);
		});
}, false);
```

## Methods

TODO none of these methods are implemented yet, but this is the intended interface:

```javascript
parsePush.initialize(appId, clientKey, function(success), function(error))

parsePush.subscribe("channel", function(success), function(error))

parsePush.unsubscribe("channel", function(success), function(error))

parsePush.getSubscriptions(function(channels))
// "channels" is a list of channels subscribed to

parsePush.addPushListener("name", function(push), function(success), function(error))
// "push" is a JSON object with "alert", "uri", "title" and any other extra data

parsePush.removePushListener("name", function(success), function(error))

parsePush.getPushListeners(function(callbacks), function(error))
// "callbacks" is a JSON object with "callback_name": callback

parsePush.sendPushInBackground("channel", data, function(success), function(error))
// "data" is a JSON object with "alert", "expirationTime", "expirationTimeInterval", "message" 
// and any other extra data

// TODO what do these methods do?
parsePush.getInstallationId(function(id))
```

NOTE: `sendPushInBackground()` requires the unsafe _Client Push Enabled_ setting in the 
_Push Notifications_ settings of your Parse app: see [Sending Pushes](https://www.parse.com/docs/push_guide#top/Android)
 
## Building

TODO

## Testing

TODO

## Developing

The Cordova SDK is available by downloading the latest Cordova Android platform SDK and importing the 
`framework` directory as an Eclipse project. Add this as a build dependency to this plugin project.

