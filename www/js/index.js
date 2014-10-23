// TODO write as necessary

document.addEventListener("deviceready", function() {
	success = function(m) { alert("Success: " + m); };
	failure = function(m) { alert("Failure: " + m); };

	$("button.initialize").click(function() {
		parsePushPlugin.initialize("testChannel", success, failure);
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
	
	$(".wait-for-ready").show();
}, false);
