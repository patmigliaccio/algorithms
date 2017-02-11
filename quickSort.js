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

var topArray = [529,487,341,688,45,248,544,882,721,684,262,547,784,642,947,804,176,24,89,804,537,144,177,949,472,139,973,701,875,966,559,979,141,475,836,316,37,714,872,113,565,380,346,152,473,385,116,825,697,391,94,907,512,460,513,95,153,51,574,655,288,587,675,142,520,807,623,76,157,709,51,218,487,457,387,995,377,5,491,943,586,471,769,225,177,54,452,129,745,414,548,727,295,256,704,115,832,779,586,839];

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