function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return;
}

function quickSort(arr, left, right) {
    if (left >= right) {
        return;
    }

    // pick a base
    let base = arr[left];
    let j = right;
    let i = left;

    while (i < j) {
        while (i < j && arr[j] > base) {
            j--;
        }

        if (i < j) {
            arr[i] = arr[j];
            i++;
        }

        while (i < j && arr[i] < base) {
            i++;
        }

        if (i < j) {
            arr[j] = arr[i];
            j--;
        }
    }
    arr[i] = base;
    quickSort(arr, left, i - 1);
    quickSort(arr, i + 1, right);
}

function test() {
    let arr = [11, 23, 3, 6, 9];
    quickSort(arr, 0, arr.length - 1);
    console.log(arr);
}

test();
