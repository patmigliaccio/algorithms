'use strict';

// BubbleSort Algorithm
/* Example 
    [2,1,4,3]
    [(2,1),4,3]
    [1,(2,4),3]
    [1,2,(4,3)]
    [1,2,3,4]
*/

let topArray = [529,487,341,688,45,248,544,472,139,769,225,177,54,452,129,745,414,548,727];

// ## 'bubbleSort'
// Loops through each value in a array
// Compares it to each next individual value
// If its greater than the next value it swaps them
function bubbleSort(ary){
    let len = ary.length;

    while (len >= 0){
        for (let i = 0; i <= len - 1; i++){
            if (ary[i] > ary[i + 1]){
                swap(ary, i, i + 1);
            }
        }

        len--;
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

console.time('bubbleSort');
console.log(bubbleSort(topArray));
console.timeEnd('bubbleSort');