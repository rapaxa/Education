const input = document.querySelectorAll('.input')
const genBtn = document.querySelector('.btn')
let textNumb = document.querySelector('.generate_text')
let saveNumber =[ ];
let min,max ;
let t;

// genBtn.addEventListener('click',()=>{
//     textNumb.textContent = 'Generated: '
//     let random_start = input[0].value
//     let random_end = input[1].value
//     total = getRandomIntInclusive(random_start,random_end)
//
//         for(let i = 0 ; i <saveNumber.length;i++) {
//         if (saveNumber[i] == total) {
//             getRandomIntInclusive(random_start, random_end)
//         }else{
//             saveNumber.push(total)
//             t = total
//         }
//     }textNumb.append(t)
// })

// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
// }
genBtn.addEventListener('click',()=> {

    min = input[0].value
    max = input[1].value
    if(min>=1 )
    saveNumber = generatedNum(min,max)
    console.log(saveNumber)

})


function generatedNum() {
    let ar = []
    for (let i = min; i < max; i++) {
        ar[i] = i;
    }

// randomize the array
    ar.sort(function () {
        return Math.random() - 0.5;
    });
    return ar
}

