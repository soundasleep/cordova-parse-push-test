// TODO write as necessary

document.addEventListener("deviceready", function() {
	alert(typeof $);
	alert(typeof jQuery);
	alert(typeof parsePushPlugin);
	alert(typeof window.parsePushPlugin);

	$(document).ready(function() {
		alert(typeof parsePushPlugin);
		alert(typeof window.parsePushPlugin);
		parsePushPlugin.initialize("testId", "testKey", 
			function(success) { 
				alert("success: " + success);
			}, function(failure) {
				alert("failure: " + failure);
			});
	});	
}, false);
