/**
 * Created by dilip on 20/2/17.
 */
"use strict";

var casDriv = require('cassandra-driver');

var casdbcli= new casDriv.Client({
    contactPoints:['localhost'],
    keyspace:'testdb'
});
/*

casdbcli.execute("SELECT now() FROM system.local",{prepare:true},function (err,result) {
    if(err){
        console.log(err)
    }else{
        console.log(result,"Check Ok")
    }
})
*/

module.exports = casdbcli;