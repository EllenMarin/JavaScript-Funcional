const numbers = [1, 2, 3, 4, 5, 6]

const greaterThanZero = el => el > 0
console.log(numbers.filter(greaterThanZero))

const greaterThanTen = el => el > 10
console.log(numbers.filter(greaterThanTen))

const even = el => el % 2 === 0
console.log(numbers.filter(even))

const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 }
]

const greatStudents = student => student.score >= 9
console.log(students.filter(greatStudents))

console.log(students)