const o1 = Object.freeze({ name: 'a', age: 13})
const o2 = {...o1, name: 'b'}

console.log(o1.name, o2.name);