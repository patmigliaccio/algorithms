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

var topArray = [529,487,341,688,45,248,544,882,721,684,262,547,784,642,947,804,176,24,89,804,537,144,177,949,472,139,973,701,875,966,559,979,141,475,836,316,37,714,872,113,565,380,346,152,473,385,116,825,697,391,94,907,512,460,513,95,153,51,574,655,288,587,675,142,520,807,623,76,157,709,51,218,487,457,387,995,377,5,491,943,586,471,769,225,177,54,452,129,745,414,548,727,295,256,704,115,832,779,586,839];

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