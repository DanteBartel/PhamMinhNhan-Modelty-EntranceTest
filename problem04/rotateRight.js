// Since there is a significant amount of values, the following given answer was implement so that the time comflexity is O(2*steps) and memory size is O(1) (not using additional arrays)

const rotateRight = (arr, steps) => {
    // Helper functions
    const swap = (arr, lidx, ridx) => {
        let t = arr[lidx];
        arr[lidx] = arr[ridx];
        arr[ridx] = t;
    }
    const reverseArray = (arr, lidx, ridx) => {
        while (lidx < ridx) {
            swap(arr, lidx, ridx);
            lidx++;
            ridx--;
        }
    }

    // step 1/3: rotate the whole array
    steps = steps % arr.length;
    let [lidx, ridx] = [0, arr.length-1];
    reverseArray(arr, lidx, ridx);

    // step 2/3: rotate the first k values, with k = steps
    [lidx, ridx] = [0, steps-1];
    reverseArray(arr, lidx, ridx);

    // step 3/3: rotate the remain values
    [lidx, ridx] = [steps, arr.length-1];
    reverseArray(arr, lidx, ridx);
}

module.exports = rotateRight;