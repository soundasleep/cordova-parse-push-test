package org.jevon.cordova.parse.pushplugin;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

import com.parse.Parse;

public class ParsePushPlugin extends CordovaPlugin {
	
	public static final String ACTION_INITIALIZE = "initialize";
	
	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		if (action.equals(ACTION_INITIALIZE)) {
			this.initialize(callbackContext, args);
			return true;
		}
		// TODO more actions...
		return false;	// false == NoSuchMethod
	}
	
	private void initialize(final CallbackContext context, final JSONArray args) throws JSONException {
		if (args.length() >= 1) {
			String appId = args.getString(0);
			String clientKey = args.getString(1);
			Parse.initialize(cordova.getActivity(), appId, clientKey);
			context.success();
		} else {
			context.error("Expected two arguments");
		}
	}

}
