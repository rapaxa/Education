//Первое задание
function getNumAndCalc(a, b) {
    if ((a % 2) == 0) {
      return (a * b);
    } else {
        return (a + b);
    }

}

    //Unit Number 2
   function getCord (x, y)  {
        if ((x > 0) && (y > 0)) {
            console.log("Лежит в I кординате");
        } else if ((x < 0) && (y < 0)) {
            console.log("Лежит в III кординате");
        } else if ((x > 0) && (y < 0)) {
            console.log("Лежит в II кординате");
        } else if ((x < 0) && (y > 0)) {
            console.log("Лежит в IV кординате");
        }
    };
//Unit Number 3
    function sum (a, b, c)  {
        let sum = 0;
        if (a > 0) sum += a;
        if (b > 0) sum += b;
        if (c > 0) sum += c;
        return sum;
    };
    //Unit number 4
     function sumMax (a, b, c)  {
        let sum, d, e;
        sum = 0;
        d = a * b * c;
        e = a + b + c;
        sum = Math.max(d, e) + 3;
        return sum;
        }

    //Unit Number 5
    function getRate (rate)  {
        if ((rate >= 0) && (rate <= 19)) {
            console.log("F");
        } else if ((rate >= 20) && (rate <= 39)) {
            console.log('E');
        } else if ((rate >= 40) && (rate <= 59)) {
            console.log('D');
        } else if ((rate >= 60) && (rate <= 74)) {
            console.log('C');
        } else if ((rate >= 75) && (rate <= 89)) {
            console.log('B');
        } else if ((rate >= 90) && (rate <= 100)) {
            console.log('A');
        } else {
            console.log("Неверно указано число");

        }
    }
