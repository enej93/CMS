/**
 * Created by enejl on 15. 06. 2016.
 */

const server = require('../../server').server;

module.exports = function(){

    server.get('/articles', function(req, res){

        res.send('Hello world articles');

    });

};