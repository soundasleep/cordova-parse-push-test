cordova.define("org.jevon.cordova.parse.pushplugin.ParsePush", function(require, exports, module) { var parsePushPlugin = {
	initialize: function(appId, clientKey, success, failure) {
		cordova.exec(
			success,
			failure,
			'ParsePushPlugin',
			'initialize',
			[appId, clientKey]
		);
	}
}

module.exports = parsePushPlugin;
});
