const ipStats = require('../middlewares/stats/ipStats');
const countIn = require('../middlewares/stats/countInArr');
const comNameAnalysis = require('../middlewares/stats/companyNameAnaysis');
const ques = require('./question');
function parserFile(file){
    console.log('File analysing started..');
    console.log('------------------------------------\n');
    let copiedFile = file;
    copiedFile = copiedFile.split("\n");
    // Recieved an array for analysis
    // console.log((/^(\S+) (\S+) (\S+) \[([\w:/]+\s[+\-]\d{4})\] "(\S+)\s?(\S+)?\s?(\S+)?" (\d{3}|-) (\d+|-)\s?"?([^"]*)"?\s?"?([^"]*)?"?$/).test(copiedFile[0);
    const standard_input = process.stdin;

    // Set input character encoding.
    standard_input.setEncoding('utf-8');

    // Prompt user to input data in console.
  
    ques();
    // When user input data and click enter key.
    standard_input.on('data', function (data) {

        // User input exit.
        if(data === 'exit\n'){
            // Program exit.
            console.log('File analysing ended..');
            process.exit();
        }else{
            // Print user input in console.
            if(Number(data) == 1){
                ipStats(copiedFile);
            }else if((data).match(/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/gi)){
               (countIn(data , copiedFile));
            }else if(Number(data) == 2 ){
                comNameAnalysis(copiedFile);
            }else{
                console.log('Invalid Input,Try again!');
                console.log('\n');
                ques();
            }
        }
    });
}

module.exports = parserFile;