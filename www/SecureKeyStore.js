var exec = require('cordova/exec');

var SecureKeyStore = {
    serviceName: "SecureKeyStore",

    set: function(key, value, success, error) {
        exec(success, error, this.serviceName, "set", [key, value]);
    },

    get: function(key, success, error) {
        exec(success, error, this.serviceName, "get", [key]);
    },

    remove: function(key, success, error, key) {
        exec(success, error, this.serviceName, "remove", [key]);
    }
};

module.exports = SecureKeyStore;
