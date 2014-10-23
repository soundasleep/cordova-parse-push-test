package org.jevon.cordova.parse.pushplugin;

import java.util.List;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

import com.parse.Parse;
import com.parse.ParseInstallation;
import com.parse.ParsePush;

public class ParsePushPlugin extends CordovaPlugin {
	
	public static final String ACTION_INITIALIZE = "initialize";
	public static final String ACTION_SUBSCRIBE = "subscribe";
	public static final String ACTION_UNSUBSCRIBE = "unsubscribe";
	public static final String ACTION_GETSUBSCRIPTIONS = "getSubscriptions";

	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		if (action.equals(ACTION_INITIALIZE)) {
			this.initialize(callbackContext, args);
			return true;
		}
		if (action.equals(ACTION_SUBSCRIBE)) {
			this.subscribe(callbackContext, args);
			return true;
		}
		if (action.equals(ACTION_UNSUBSCRIBE)) {
			this.unsubscribe(callbackContext, args);
			return true;
		}
		if (action.equals(ACTION_GETSUBSCRIPTIONS)) {
			this.getSubscriptions(callbackContext, args);
			return true;
		}
		// TODO more actions...
		return false;	// false == NoSuchMethod
	}
	
	private void initialize(final CallbackContext context, final JSONArray args) throws JSONException {
		if (args.length() >= 2) {
			final String appId = args.getString(0);
			final String clientKey = args.getString(1);
			
			// "exec() to initialize blocked the main thread; Plugin should use CordovaInterface.getThreadPool()"
			cordova.getThreadPool().execute(new Runnable() {
				@Override
				public void run() {
					Parse.initialize(cordova.getActivity(), appId, clientKey);
					
					// "Also, save the current installation to Parse"
					ParseInstallation.getCurrentInstallation().saveInBackground();
					
					context.success();
				}
			});
		} else {
			context.error("Expected two arguments");
		}
	}	
	
	private void subscribe(final CallbackContext context, final JSONArray args) throws JSONException {
		if (args.length() >= 1) {
			final String channel = args.getString(0);
			
			ParsePush.subscribeInBackground(channel);
			context.success();
		} else {
			context.error("Expected one argument");
		}
	}
	
	private void unsubscribe(final CallbackContext context, final JSONArray args) throws JSONException {
		if (args.length() >= 1) {
			final String channel = args.getString(0);
			
			ParsePush.unsubscribeInBackground(channel);
			context.success();
		} else {
			context.error("Expected one argument");
		}
	}
	
	private void getSubscriptions(final CallbackContext context, final JSONArray args) throws JSONException {
		List<String> subscriptions = ParseInstallation.getCurrentInstallation().getList("channels");
		context.success(new JSONArray(subscriptions));
	}
}
