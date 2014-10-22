cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.jevon.cordova.parse.pushplugin/www/parse-push.js",
        "id": "org.jevon.cordova.parse.pushplugin.ParsePush",
        "clobbers": [
            "window.parsePush"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.jevon.cordova.parse.pushplugin": "0.0.1"
}
// BOTTOM OF METADATA
});