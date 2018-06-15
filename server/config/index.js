var configValues = require('./config.json');

module.exports = {
    // mLab db
    getDbConnectionString : function(){
        console.log(configValues.username + "   " + configValues.password );
        return `mongodb://${ configValues.username }:${configValues.password}@ds259325.mlab.com:59325/iotspk`
    },
    // local db
    getLocalDbConnectionString : function()
    {
        return 'mongodb://localhost/mean-app';
    },
    getSecret: function(){
        return configValues.secret;
    }
}