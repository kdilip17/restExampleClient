var userModel = require('../model/onelogin');
var moduleId  = 'onelogin';
var appType   = 'onelogin';
const pack = require('../../package')

/**
 * Register Controller
 */
var internal = {};

internal.prepareReq = (req, reply) => {
	// console.log(req)
    req.headers["origin"] = "*";
    const newReq = {
        params : req.params,
        query  : req.query,
        payload: req.payload,
        auth   : req.auth.credentials,
        info   : req.info,
        headers: req.headers,
        meta   : {
            id      : req.id,
            methodId: req.route.settings.app.methodId,
            apiVer  : pack.version
        }
    };
    return reply(newReq);
}

var response = {
    meta : {
        id :"id",
        methodId:"methodId"
    },
    activityList:{
        index:0,
        activity:[{
            "a":"b"
        }]
    }
}

exports.register = function (req, reply) {
	internal.prepareReq(req,function (reqObj) {
        userModel.getDbTest(reqObj,function (err,res) {
            if(err){
                console.log("error=======================",err)
                return reply({code:555,message:JSON.stringify(err)})
            }else{
                return reply(res)
            }
        })
    })
};


exports.testHello = function (req, reply) {
	console.log(req)
};

