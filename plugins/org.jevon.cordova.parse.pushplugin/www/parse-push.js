var parsePushPlugin = {
	initialize: function(appId, clientKey, success, failure) {
		cordova.exec(
			success,
			failure,
			'ParsePushPlugin',
			'initialize',
			[appId, clientKey]
		);
	},
	subscribe: function(channel, success, failure) {
		cordova.exec(
			success,
			failure,
			'ParsePushPlugin',
			'subscribe',
			[channel]
		);
	},
	unsubscribe: function(channel, success, failure) {
		cordova.exec(
			success,
			failure,
			'ParsePushPlugin',
			'unsubscribe',
			[channel]
		);
	},
	getSubscriptions: function(success, failure) {
		cordova.exec(
			success,
			failure,
			'ParsePushPlugin',
			'getSubscriptions',
			[]
		);
	}
};

module.exports = parsePushPlugin;