// Index Signatures

// Index signatures allow us to define an object that can have any number of properties, and as long as the property name is a string, the value can be of any type.
interface TransactionObj {
    [key: string]: number // index signature (key: string, value: number)
    Pizza: number
    Books: number
    Job: number
}

// // Old way   
// interface TransactionObj {
//     Pizza: number
//     Books: number
//     Job: number
// }

const todaysTransactions: TransactionObj = {
    Pizza: -10, 
    Books: -20,
    Job: 100
}

console.log(todaysTransactions.Pizza) // -10
console.log(todaysTransactions['Pizza']) // -10

let prop: string = 'Pizza'
console.log(todaysTransactions[prop]) // OK with index signature

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0
    for (let tran in transactions) {
        total += transactions[tran]
    }
    return total // 70
}

todaysTransactions.Pizza = 40 

console.log(todaysTransactions['Sean']) 
console.log(todaysTransactions[4]) 




///////////////////////////////////

interface Student {
    [index: string]: string | number | number[] | undefined // index signature 
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: 'Sean',
    GPA: 4.0,
    classes: [1, 2, 3]
}

console.log(student.test) // OK now

// 有index signature这样写就可以了
for (const key in student) {
    console.log(`${key}: ${student[key]}`)
}

// 没有index signature就得cast
for (const key in student) {
    console.log(`${key}: ${(student)[key as keyof Student]}`)
}

// 如果连student的type都不知道，就得这样写
for (const key in student) {
    console.log(`${key}: ${student[key as keyof typeof student]}`)
}

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`${key}: ${student[key]}`)
}

logStudentKey(student, 'GPA') // 4





