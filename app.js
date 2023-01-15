let friends = ["jim", "joe", "bob", "phil", "john"];//array of people

// let div = document.createElement('div')

function makefriend() {
    let jim = document.createElement('div');
    let jimh3 = document.createElement('h3')
    let jimtext = document.createTextNode('Jim')
    let jimpara = document.createElement('p')
    let jimparatext = document.createTextNode('nhbgut')
    jim.className = 'friend'
    jimh3.appendChild(jimtext)
    jim.appendChild(jimh3)
    jimpara.appendChild(jimparatext)
    jim.appendChild(jimpara)
    document.body.appendChild(jim)

    // for (let i = 0; i < friends.length; i++) {
    //     bmmn
    // }




    for (let j = 99; j > 0; j--) {
        if (j > 2) { // 99 to 2 ..."lines of"... 
            console.log(j + " lines of code in the file, " + j + " lines of code; " + friend[4] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file.");
        } else if (j == 2) { // 2 == plural. 
            console.log(j + " lines of code in the file, " + j + " lines of code; " + friend + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file.");
        } else if (j == 1) { // 1 == singular.
            console.log(j + " line of code in the file, " + j + " line of code; " + friend + " strikes one out, clears it all out, no more lines of code in the file!");
        };
    };







    let joe = document.createElement('div');
    let joeh3 = document.createElement('h3')
    let joetext = document.createTextNode('Joe')
    joe.className = 'friend'
    joeh3.appendChild(joetext)
    joe.appendChild(joeh3)
    document.body.appendChild(joe)

    let bob = document.createElement('div');
    let bobh3 = document.createElement('h3')
    let bobtext = document.createTextNode('Bob')
    bob.className = 'friend'
    bobh3.appendChild(bobtext)
    bob.appendChild(bobh3)
    document.body.appendChild(bob)

    let phil = document.createElement('div');
    let pjohnhilh3 = document.createElement('h3')
    let philtext = document.createTextNode('Phil')
    phil.className = 'friend'
    pjohnhilh3.appendChild(philtext)
    phil.appendChild(pjohnhilh3)
    document.body.appendChild(phil)

    let john = document.createElement('div');
    let johnh3 = document.createElement('h3')
    let johntext = document.createTextNode('John')
    john.className = 'friend'
    johnh3.appendChild(johntext)
    john.appendChild(johnh3)
    document.body.appendChild(john)

}
let button = document.getElementById('btn')
button.addEventListener('click', makefriend)



function sing() {
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

}



















