// (function (exports, require, module, __filename, __dirname) {

    // var x =;

    console.log(__filename);
    console.log(__dirname);
    
    var url = 'http://mylogger.io/log'

    function log(message) {
        //  Send HTTP request
        console.log(message); 
    } 

    module.exports.log = log;
    // module.exports.endPoint = url
// })
