"use strict";

var external = {}
var casDb = require("../config/cassandra")

external.getDbTest = (req,callBack) => {
    casDb.execute("SELECT now() FROM system.local1",{prepare:true},function (err,result) {
        if(err){
            return callBack(err)
        }else{
            return callBack(null,"Check Ok")
        }
    })
}

module.exports = external;