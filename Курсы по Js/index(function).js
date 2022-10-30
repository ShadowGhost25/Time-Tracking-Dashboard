//Функции

// function greet (name){
//     console.log('Привет - ', name);
// }

// const greet2 = function greet2(name){
//     console.log('Привет 2 -', name);
// }

// greet('Лена')
// greet2('Лена')
// console.dir(greet)

//Анонимные функции

// let couter = 0
// const interval = setInterval( function() {
//     if (couter === 5) {
//         clearInterval(interval) //clearTimeout
//     } else {
//         console.log(++couter);
//     }
    
// }, 1000)

// Стрелочная функция
// function greet (name){
//     console.log('Привет - ', name);
// }

// const aroow = (name, age) => {
//     console.log('Привет - ', name, age)
// }

// const aroow2 = name =>console.log('Привет - ', name)

// aroow('Vlad')
// aroow2('Слав')

// const pow2 = num => {
//     return num **2
// }

// console.log((pow2(5)));

//Параметры по умолчанию

// const sum = (a =40 , b =1) => a + b
// console.log(sum());

// function small (...all){
//     let result = 0
//     for(let num of all){
//         result += num
//     }
//     return result
// }
// const res = small(1,2,3,4,5)
// console.log(res);

// Замыкание
// function createMember (name){
//     return function(lastName){
//         console.log(name + lastName);
//     }
// }

// const logWithLastName = createMember('Илья')
// console.log(logWithLastName('pah'));
// console.log(logWithLastName('hap'));