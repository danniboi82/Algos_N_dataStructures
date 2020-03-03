// I: unsorted array
// O: sorted array
// C: optimize, add boolean to break when no swap
// E: nothing in array

//Sort unsorted array from smallest to greatest

function bubbleSort(arr) {
//First loop through in reverse so that arrlength decreases everytime number is sorted
//Second loop go from beginning to end 
//compare current index (ex j) with next index (j + 1)
//if current is bigger than next then swap
let swap;
for(let i = arr.length; i > 0; i--){
    swap = false;
    for(let j = 0; j < i - 1; j++){
        console.log(arr[j], arr[j+1]);
        if(arr[j] > arr[j + 1]){
            [arr[j], arr[j + 1]] = [arr[j+1], arr[j]];
        swap = true;
        }
    }
    if(!swap) break;

}
console.log(arr);
}


bubbleSort([3, 5, 2, 4, 1]);
bubbleSort([8, 1, 2, 3, 4]);