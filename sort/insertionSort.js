'use strict';

// InsertionSort Algorithm
/* Example
    [2,1,4,3] (value)
    [ ,2,4,3] (1)
    [1,2,4,3]
    [1,2, ,4] (3)
    [1,2,3,4]
*/

let topArray = [529,487,341,688,45,248,544,472,139,769,225,177,54,452,129,745,414,548,727];

// ## 'insertionSort'
// Loops through each value in the array
//
// If the value is greater the the current previous
//  move the current previous right to make room for insertion
//
// Once the current previous index is either 0
//  or its value is no longer greater than current value
//  insert the current value in that position
//
// 'i' is the incoming index
// 'j' is the index of the loop of the previously inserted
function insertionSort(ary){
    let len = ary.length;

    for (let i = 1; i < len; i++){
        let j = i - 1,
            value = ary[i];

        while (j >= 0 && ary[j] > value){
            ary[j + 1] = ary[j];
            j--;
        }

        ary[j + 1] = value;
    }

    return ary;
}

console.time('insertionSort');
console.log(insertionSort(topArray));
console.timeEnd('insertionSort');