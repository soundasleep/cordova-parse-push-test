package org.jevon.cordova.parse.pushplugin;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

public class ParsePushPlugin extends CordovaPlugin {
	
	public static final String ACTION_INITIALIZE = "initialize";
	
	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		if (action.equals(ACTION_INITIALIZE)) {
			this.initialize(callbackContext, args);
			return true;
		}
		// TODO more actions...
		return false;
	}
	
	private void initialize(final CallbackContext context, final JSONArray args) {
		if (args.length() >= 1) {
			context.success("success");
		} else {
			context.error("no args specified");
		}
	}

}
