# cordova-parse-push

A Javascript interface between [Parse push notifications](https://www.parse.com/apps/quickstart?onboard=#parse_push/android/new) and [Apache Cordova](http://cordova.apache.org/) (and [probably Phonegap too](http://stackoverflow.com/questions/18174511/is-there-a-difference-between-phonegap-and-cordova-commands)).

Only implemented on Android so far... probably possible to add iOS support.

Based on [hazemhagrass/push-parse](https://github.com/hazemhagrass/push-parse) and [avivais/phonegap-parse-plugin](https://github.com/avivais/phonegap-parse-plugin).

## Installation

```
plugin add https://github.com/soundasleep/cordova-parse-push --variable PARSE_APP_ID=abc123 --variable PARSE_CLIENT_SECRET=abc123
```

Define your Parse AppId and SecretKey in your ``config.xml``:

```
	<preference name="PARSE_APP_ID" value="abc123" />
	<preference name="PARSE_CLIENT_SECRET" value="abc123" />
```

Then use the plugin once Cordova has completed loading everything:

```
document.addEventListener("deviceready", function() {
	parsePushPlugin.initialize(function(success) { 
			alert("success: " + success);
		}, function(failure) {
			alert("failure: " + failure);
		});
}, false);
```

Finally add the custom `ParsePushApplication` to your `AndroidManifest.xml`, 
o that Parse can be initialised at application startup (necessary to register the push handler):

```
  <application android:name="org.jevon.cordova.parse.pushplugin.ParsePushApplication" ... /> 
```

## Methods

```javascript
parsePush.initialize("appId", "clientKey", function(success), function(error));
// not actually necessary, App is initialised with secrets above at startup

parsePush.subscribe("channel", function(success), function(error));

parsePush.unsubscribe("channel", function(success), function(error));

parsePush.getSubscriptions(function(channels), function(error));
// "channels" is a list of channels subscribed to

parsePush.getInstallationId(function(id), function(error));
```

## Sending pushes

When you log into your Parse dashboard, you should send a JSON push with a URI e.g.:

```json
{ "uri": "https://github.com/soundasleep/cordova-parse-push", "alert": "This is a push notification", "title": "cordova-parse-push" }
```

When the push notification is opened, the system will open up the activity (or request the activities) 
that can handle that URI. If you do not specify a URI, an exception 
_ActivityNotFoundException: No Activity found to handle Intent_ will occur when 
[trying to open an Intent with no URI](http://stackoverflow.com/questions/26154855/exception-when-opening-parse-push-notification).

If you'd like to override the default push notification open activity, you might want to 
[override the ParsePushBroadcastReceiver](http://stackoverflow.com/questions/26154855/exception-when-opening-parse-push-notification).

## Changing the push icon

Look at the [Customizing Notification Icons](https://parse.com/docs/push_guide#top/Android) 
section of the Parse manual, and define a drawable resource in your project:

```xml
<meta-data android:name="com.parse.push.notification_icon" android:resource="@drawable/push_icon"/>
``` 

## Testing

This project is demonstrated by the [cordova-parse-push-test](https://github.com/soundasleep/cordova-parse-push-test) example project.

## Developing

The Cordova SDK is available by downloading the latest Cordova Android platform SDK and importing the 
`framework` directory as an Eclipse project. Add this as a build dependency to this plugin project.

