let cicle = {
    taskOne: () => {
        let sum = 0, col = 0;
        for (let i = 0; i <= 99; i++) {
            if ((i % 2) == 0) {
                sum += i;
                col++;
            }
        }
        console.log(sum + ' leng ' + col);
    },
    taskTwo: (a) => {
        for (let i = 2; i < a; i++) {
            if (a % i == 0) {
                console.log('Обычное');
                break;
            } else {
                console.log("Простое");
                break;
            }
        }
    },
    taskThree: (x) => {
        let left = 1;
        let right = x - 1;
        while (left <= right) {
            let mid = Math.round((right + left) / 2);
            if (mid * mid > x) {
                right = mid - 1;
            } else if (mid * mid < x) {
                left = mid + 1;
            } else {
                return mid;
            }

        }
    },
    taskThreeTwo: (x) => {
        let center;
        for (let i = 1; i <= x; i += 0.1) {
            center = i * i;
            if (Math.round(center) == x) {
                console.log(Math.round(i));
            }
        }
        ;
    },
    taskFour: (x) => {
        let pr = 1;
        for (let i = 1; i <= x; i++) {
            pr *= i;
        }
        console.log(pr);
    },
    taskFive: (x) => {
        let sum = 0;
        while (x != 0) {
            sum += x % 10;
            x = Number.parseInt(x / 10);
        }
        console.log(sum);

    },
    taskSix: (x) => {
        let sum = 0;
        while (x != 0) {
            sum *= 10;
            sum += x % 10;
            x = Number.parseInt(x / 10);
        }
        console.log(sum);
    }

};