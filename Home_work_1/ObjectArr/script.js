let array = {
    oneToFiveTask: (arr) => {
        let max = arr[0];
        let minIndex;
        let sum = 0;
        let index = arr[0];
        let maxIndex;
        let min = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 == 1) {
                sum += arr[i];
                console.log(i);
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (min > arr[i]) {
                min = arr[i];
                minIndex = arr.indexOf(min);
            } else if (max < arr[i]) {
                max = arr[i];
                maxIndex = arr.indexOf(max);
            }
        }
        ;alert('min arr' + min + '' + minIndex);
        alert('max arr ' + max + ' ' + maxIndex);
        alert('sum' + sum);
    },
    taskSix: (arr) => {
        for (let i = arr.length - 1; i >= 0; i--) {
            console.log(arr[i]);
        }
    },
    taskSeven: (arr) => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 1) {
                sum++;
            }
        }
        console.log(sum);
    },
    taskEight: (arr) => {
        for (let y = 0; y < (arr.length) / 2; y++) {
            let tmp = arr[y];  //tmp=половина массива
            arr[y] = arr[y + arr.length / 2]; // массив равен 3 & 4
            arr[y + arr.length / 2] = tmp; //3&4 ==1&2
        }
        console.log(arr);
    },
    sortBubble: (arr) => {
        let col = arr.length;
        for (let i = 0; i < col; i++) {
            for (let j = 0; j < col; j++) {
                if (arr[j] < arr[j - 1]) {
                    let tmp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = tmp;
                }

            }

        }
        console.log(arr);
    },
    sortSelect: (arr) => {
        for (let y = 0; y < arr.length - 1; y++) {
            let min = y;
            for (let t = y + 1; t < arr.length; t++) {
                if (arr[t] < arr[min]) min = t;

                let tmp = arr[min];
                arr[min] = arr[t];
                arr[t] = tmp;
            }


        }
        console.log(arr);
    },
    sortInsert: (arr) => {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
                let tmp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = tmp;

            }
        }
        console.log(arr);
    },
};