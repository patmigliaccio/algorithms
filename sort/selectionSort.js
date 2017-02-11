'use strict';

// SelectionSort Algorithm
/* Example
    [2,1,4,3]   (i)
    [(2),1,4,3] (0)
    [2,(1),4,3] (1)
    [1,(2),4,3] (1)
    [1,2,(4),3] (2)
    [1,2,4,(3)] (3)
    [1,2,3,4]
*/

let topArray = [529,487,341,688,45,248,544,472,139,769,225,177,54,452,129,745,414,548,727];

// ## 'selectionSort'
// For each index in the array, checks to see if its value is lowest 
//  compared to the subsequent index position values
// If not, it sets the lowest value index pos. to the other value pos.
// Once it goes through all subsequent pos.,
//  swaps lowest value with current index
function selectionSort(ary){
    let len = ary.length;

    for (let i = 0; i < len; i++){
        let min = i
        for (let j = i + 1; j < len; j++){
            if (ary[j] < ary[min]){
                min = j;
            }
        }

        swap(ary, i, min);
    }

    return ary;
}

// ## 'swap'
// Swaps the a index value with b index value
// Has closure over the array variable reference
function swap(ary, a, b){
    let temp = ary[a];

    ary[a] = ary[b];
    ary[b] = temp;
}

console.time('selectionSort');
console.log(selectionSort(topArray));
console.timeEnd('selectionSort');