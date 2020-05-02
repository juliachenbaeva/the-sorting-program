export const gnomeSort = (arr) => {
    let startTime = new Date().getTime();

    function moveBack(i) {
        for (; i > 0 && arr[i - 1] > arr[i]; i--) {
            var t = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = t;
        }
    }
    for (var i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) moveBack(i);
    }


    let endTime = new Date().getTime();
    return endTime - startTime;
}

