function printManyTimes(str) {
    "use strict";

    // only change code below this line
    const SENTENCE = str + " is cool!";
    for(let i = 0; i < str.length; i++) {
        console.log(SENTENCE);
    }

    return SENTENCE;
    // only change code above this line
}
printManyTimes("Arena");
module.exports = printManyTimes;