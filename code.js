function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            return false;
        }
    }
    return true;
}

function permutationSort(arr) {
    let count = 0;
    let sorted = false;

    function permute(subArr, startIndex) {
        if (startIndex === subArr.length - 1) {
            count++;
            if (isSorted(subArr)) {
                for (let i = 0; i < arr.length; i++) {
                    arr[i] = subArr[i];
                }
                sorted = true;
            }
            return;
        }

        for (let i = startIndex; i < subArr.length; i++) {
            [subArr[startIndex], subArr[i]] = [subArr[i], subArr[startIndex]];
            permute(subArr, startIndex + 1);
            if (sorted) return; 
            [subArr[startIndex], subArr[i]] = [subArr[i], subArr[startIndex]];
        }
    }

    permute(arr, 0);
    return count;
}
