function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            return false;
        }
    }
    return true;
}

function* generatePermutations(arr) {
    if (arr.length <= 1) {
        yield arr;
    } else {
        for (let i = 0; i < arr.length; i++) {
            let rest = arr.slice(0, i).concat(arr.slice(i + 1));
            for (let perm of generatePermutations(rest)) {
                yield [arr[i]].concat(perm);
            }
        }
    }
}

function permutationSort(a) {
    let count = 0;
    for (let perm of generatePermutations(a)) {
        count++;
        if (isSorted(perm)) {
            for (let i = 0; i < a.length; i++) {
                a[i] = perm[i];
            }
            return count;
        }
    }
    return count;
}
