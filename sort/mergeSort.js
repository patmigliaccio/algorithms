'use strict';

// MergeSort Algorithm
/* Example 
    [2,1,4,3] // DIVIDE
    [2,1][4,3]
    [2][1][4][3]
    [2][3][4] -> [1] // CONQUER
    [3][4] -> [1,2]
    [4] -> [1,2,3]
    [1,2,3,4]
*/

let topArray = [529,487,341,688,45,248,544,472,139,769,225,177,54,452,129,745,414,548,727];

// ## 'mergeSort'
// Takes an array of integers and splits them in half
// Resurively splits each into halves down to the atomic level
// Recursively merges them up in order of numerical weight
function mergeSort(ary){
    let len = ary.length;

    if (len < 2){
        return ary;
    }

    let middle = Math.round(len / 2);
    let a = ary.slice(0, middle);
    let b = ary.slice(middle, len);

    return merge(mergeSort(a), mergeSort(b));
}

// ## 'merge'
// Takes two arrays of integers
// Determines which first value of each array is greater
// Adds that to the result array until no values are a in a and b
function merge(a, b){
    let result = [];

    while (a.length && b.length){
        if (a[0] <= b[0]){
            result.push(a.shift());
        } else {
            result.push(b.shift());
        }
    }

    while (a.length){
        result.push(a.shift());
    }

    while (b.length) {
        result.push(b.shift())
    }

    return result;
}

console.time('mergeSort');
console.log(mergeSort(topArray));
console.timeEnd('mergeSort');