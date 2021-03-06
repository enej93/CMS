/**
 * Created by enejl on 14. 06. 2016.
 */

var server      = require ('./server');
var database    = require ('./database');
const config    = require('./config');

database.init()
    .then(server.init)
    .then(()=>{
        require('./resources')();
    })
    .then(()=>{

        console.log('All is well | on port: '+config.PORT);

    })
    .catch(function(err){

        console.log('Catch error:',err);

    });
