// const person = {
//     name: 'Ilya',
//     age: 18,
//     isProgrammer: true,
//     languages: ['ru', 'en'],
//     greet() {
//         console.log('greet from person')
//     },
//     info(){
//         console.log('Информация про человека по имени: ', this.name);
//     }
// }

// const name = person.name
// const age = person.age
// const languages = person.languages

// const {name, age, languages} = person
// console.log(name, age, languages);

// for (let key in person) {
//     if (person.hasOwnProperty(key)){
//     console.log('key',key);
//     console.log('value:',person[key]);
//     }
// }

// Object.keys(person).forEach((key) => {
//     console.log(key);
//     console.log(person[key]);
// })

//Context
// person.info()

// const logger = {
//     keys(){
//         console.log("object keys", Object.keys(this));
//     }
// }

// const bound = logger.keys.bind(logger)
// bound()