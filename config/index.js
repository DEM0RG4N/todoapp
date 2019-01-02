let cfgValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb://' + cfgValues.uname + ':' + cfgValues.pwd + '@ds145921.mlab.com:45921/todo-app';
    }

}