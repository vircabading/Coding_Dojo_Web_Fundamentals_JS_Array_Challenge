/////////////////////////////////////////////////
// Coding Dojo > Web Fundamentals > Javascript > Array Challenge
// By:  Virgilio D. Cabading Jr.    October 23, 2021
/////////////////////////////////////////////////

import { print_desc } from "./module.js";
import { print_ln } from "./module.js";

/////////////////////////////////////////////////
// Functions

function alwaysHungry (tempArray) {
    var foundFood = false;
    for (var x=0; x<tempArray.length; x++) {
        if (tempArray[x] == 'food') {
            console.log("yummy");
            foundFood = true;
        }
    }
    if (!foundFood) {
        console.log("I'm hungry");
    }
}

/////////////////////////////////////////////////
// Main Executable Section

// 1. Always Hungry /////////////////////////////
print_desc("1. Always Hungy");

print_desc("1st alwaysHungry() call");
alwaysHungry([3.14, "food", "pie", true, "food"]);      // this should console log "yummy", "yummy"
print_desc("2nd alwaysHungry() call")
alwaysHungry([4, 1, 5, 7, 2]);                          // this should console log "I'm hungry"