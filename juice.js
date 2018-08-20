/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return console.log(line);
}


// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle (width){
    for (var x = 1; x <= width + 1; x++){
        makeLine(x);
    }
} 
buildTriangle(10);
// test your code by uncommenting the following line
//console.log(buildTriangle(10));