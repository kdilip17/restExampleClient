/**
 * Created by mayo on 05/02/17.
 */

var olctrl = require('../controller/onelogin');

module.exports = [
    {
        method:'GET',
        path: '/ping',
        handler: function(req, reply){
            reply({"res":"pong"});
        }
    },
    {
        method: 'POST',
        path: '/register/{name}',
        handler: olctrl.register,
        config: {
            app        : {
                methodId: "ACC_REGISTER"
            }
        }
    },
    {
        method: 'GET',
        path: '/register/hello',
        handler: olctrl.testHello,
        config: {
            app        : {
                methodId: "ACC_REGISTER"
            }
        }
    }
];