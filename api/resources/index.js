/**
 * Created by enejl on 15. 06. 2016.
 */

module.exports = function(){

    require('./article/model');
    require('./article/routes')();

    require('./project/model');
    require('./project/routes')();

}