let friends = ["jim", "joe", "bob", "phil", "john"];//array of friends




for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);

    let friend = friends[i];

    for (let j = 99; j > 0; j--) {
        if (j > 2) { // 99 to 2 ..."lines of"... 
            console.log(j + " lines of code in the file, " + j + " lines of code; " + friend + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file.");
        } else if (j == 2) { // 2 == plural. 
            console.log(j + " lines of code in the file, " + j + " lines of code; " + friend + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file.");
        } else if (j == 1) { // 1 == singular.
            console.log(j + " line of code in the file, " + j + " line of code; " + friend + " strikes one out, clears it all out, no more lines of code in the file!");
        };
    };
};




for (let j = 99; j >= 0; j--) {
    console.log(j + ' lines of code in the file, ' + j + ' lines of code; ' + friend + ' strikes one out, clears it all out, ' + j + ' lines of code in the file')
}


















