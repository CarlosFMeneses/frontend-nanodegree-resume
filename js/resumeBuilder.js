/*
If given a string of a two word name formatted with any mix of capitalization, 
can you manipulate the string to ensure the first name has a capital first 
letter and the last name is totally capitalized? Your answer should be a single 
string saved to the variable called finalName.
*/

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!

    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    
    // Don't delete this line!
    return finalName;
}

// Did your code work? The line below will tell you!
console.log(nameChanger(name));