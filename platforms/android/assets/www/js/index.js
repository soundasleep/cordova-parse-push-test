// TODO write as necessary

document.addEventListener("deviceready", function() {
	$(document).ready(function() {
		parsePushPlugin.initialize("IJ1M9zwnbfYIhsd4WIe9R9jSLr6Amt6KVrJZSaz3", "szZJuqN4y0Sa40NTPJROZTXikUtS1K33bviXNZcA", 
			function(success) { 
				alert("Initialize success: " + success);
			}, function(failure) {
				alert("Initialize failure: " + failure);
			});
		
		success = function(m) { alert("Success: " + m); };
		failure = function(m) { alert("Failure: " + m); };
	
		$("button.subscribe").click(function() {
			parsePushPlugin.subscribe("testChannel", success, failure);
		});
		$("button.unsubscribe").click(function() {
			parsePushPlugin.unsubscribe("testChannel", success, failure);
		});
		$("button.getSubscriptions").click(function() {
			parsePushPlugin.getSubscriptions(function (channels) {
				alert("Channels subscribed to: " + channels);
			});
		});
		
		$(".wait-for-ready").show();
	});	
}, false);
