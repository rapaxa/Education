
   function taskOne ()  {
        let sum = 0, col = 0;
        for (let i = 0; i <= 99; i++) {
            if ((i % 2) == 0) {
                sum += i;
                col++;
            }
        }
        return (sum , col);
    };
    function taskTwo (a){
        for (let i = 2; i < a; i++) {
            if (a % i == 0) {
                return 'Обычное';
                break;
            } else {
                return "Простое";
                break;
            }
        }
    };

    function taskThree(x)  {
        let a = x;
        while (x * x > a) {
            x = x / 2;
        }
        while (x * x < a) {
            x++;
        }
        return Math.floor(x);

    };

    function taskThreeTwo (x)  {
        let center;
        for (let i = 1; i <= x; i += 0.1) {
            center = i * i;
            if (Math.round(center) == x) {
                return Math.round(i);
            }
        }
        ;
    };

    function taskFour (x)  {
        if(x < 1 ){
            return 0
        }
        let pr = 1;
        for (let i = 1; i <= x; i++) {
            pr *= i;
        }
        return pr
    };

    function taskFive (x)  {
        let sum = 0;
        while (x != 0) {
            sum += x % 10;
            x = Number.parseInt(x / 10);
        }
       return sum

    };
    function taskSix (x)  {
        let sum = 0;
        while (x != 0) {
            sum *= 10;
            sum += x % 10;
            x = Number.parseInt(x / 10);
        }
        return sum
    };
   module.exports ={taskOne,taskTwo,taskThree,taskThreeTwo,taskFour,taskFive,taskSix};

