'use strict';

// QuickSort Algorithm
/* Example
   [2,1,4,3]
   2 -> [1,4,3]
   2 -> [1] [4,3]
   [1] 2 [4,3]
   4 -> [3]
   [1] 2 [3] 4
   [1,2,3,4]
 */

let topArray = [529,487,341,688,45,248,544,472,139,769,225,177,54,452,129,745,414,548,727];

function quickSort(ary){
    // once done sorting, return the array
    if (ary.length < 1){
        return [];
    }

    let l = []; // lower than pivot value
    let r = []; // higher than pivot value
    let pivot = ary[0]; // middle value

    // starts at 1 to skip pivot value
    for (let i = 1; i < ary.length; i++){
        if (ary[i] < pivot){
            l.push(ary[i]);
        } else {
            r.push(ary[i]);
        }
    }

    // sorted left array + pivot value + sorted right array
    return quickSort(l).concat(pivot, quickSort(r));
}

console.time('quickSort');
console.log(quickSort(topArray));
console.timeEnd('quickSort');