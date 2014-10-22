// TODO write as necessary

document.addEventListener("deviceready", function() {
	$(document).ready(function() {
		parsePushPlugin.initialize("testId", "testKey", 
			function(success) { 
				alert("success: " + success);
			}, function(failure) {
				alert("failure: " + failure);
			});
	});	
}, false);
