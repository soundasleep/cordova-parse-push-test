// TODO write as necessary

document.addEventListener("deviceready", function() {
	success = function(m) { alert("Success: " + m); };
	failure = function(m) { alert("Failure: " + m); };

	$("button.initialize").click(function() {
		parsePushPlugin.initialize("IJ1M9zwnbfYIhsd4WIe9R9jSLr6Amt6KVrJZSaz3", "szZJuqN4y0Sa40NTPJROZTXikUtS1K33bviXNZcA", success, failure);
	});
	$("button.subscribe").click(function() {
		parsePushPlugin.subscribe("testChannel", success, failure);
	});
	$("button.unsubscribe").click(function() {
		parsePushPlugin.unsubscribe("testChannel", success, failure);
	});
	$("button.getSubscriptions").click(function() {
		parsePushPlugin.getSubscriptions(function (channels) {
			alert("Channels subscribed to: " + channels);
		}, failure);
	});
	$("button.getInstallationId").click(function() {
		parsePushPlugin.getInstallationId(function (id) {
			alert("Installation ID: " + id);
		}, failure);
	});
	
	$(".wait-for-ready").show();
}, false);
