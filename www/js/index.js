// TODO write as necessary

document.addEventListener("deviceready", function() {
	$(document).ready(function() {
		parsePushPlugin.initialize("IJ1M9zwnbfYIhsd4WIe9R9jSLr6Amt6KVrJZSaz3", "szZJuqN4y0Sa40NTPJROZTXikUtS1K33bviXNZcA", 
			function(success) { 
				alert("Initialize success: " + success);
			}, function(failure) {
				alert("Initialize failure: " + failure);
			});
	});	
}, false);
