const fs = require('fs');

const filename = "./access_log_20190917-163310+0000.log";

const util = require('util');

const readFile = require('./middlewares/readfile');

const parserFile = require('./middlewares/parserFile');

let fileSy;

(async () => {
    try {
        fileSy =  await(readFile(filename));
    }
    catch(error) {
        console.log('Error fetching file!', error);
    }
    if(fileSy){
        parserFile(fileSy);
    }
})();

