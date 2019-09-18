const ques = require('../question');
module.exports = (list) => {
    let ipList = [];
    let newList = list.slice(0);
    if(list.length  !== 0){
        for(let i=0;i<newList.length-1;i++){
            ipList.push((newList[i].match(/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/gi)).toString());
        }
    }
    ipList.pop();
    console.log(compressArray(ipList));
    console.log('\n\n');
    ques();
}


function compressArray(original) {
 
	var compressed = [];
	// make a copy of the input array
	var copy = original.slice(0);
 
	// first loop goes over every element
	for (var i = 0; i < original.length; i++) {
 
		var myCount = 0;	
		// loop over every element in the copy and see if it's the same
		for (var w = 0; w < copy.length; w++) {
            
			if (original[i] == copy[w]) {
                // increase amount of times duplicate is found
				myCount++;
				// sets item to undefined
				delete copy[w];
			}
		}
 
		if (myCount > 0) {
			var a = new Object();
			a.value = original[i];
			a.count = myCount;
			compressed.push(a);
		}
	}
 
	return compressed;
};