"use strict";
// Index Signatures
// // Old way   
// interface TransactionObj {
//     Pizza: number
//     Books: number
//     Job: number
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -20,
    Job: 100
};
console.log(todaysTransactions.Pizza); // -10
console.log(todaysTransactions['Pizza']); // -10
let prop = 'Pizza';
console.log(todaysTransactions[prop]); // OK with index signature
const todaysNet = (transactions) => {
    let total = 0;
    for (let tran in transactions) {
        total += transactions[tran];
    }
    return total; // 70
};
todaysTransactions.Pizza = 40;
console.log(todaysTransactions['Sean']);
console.log(todaysTransactions[4]);
const student = {
    name: 'Sean',
    GPA: 4.0,
    classes: [1, 2, 3]
};
console.log(student.test); // OK now
// 有index signature这样写就可以了
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
// 没有index signature就得cast
for (const key in student) {
    console.log(`${key}: ${(student)[key]}`);
}
// 如果连student的type都不知道，就得这样写
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
const logStudentKey = (student, key) => {
    console.log(`${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA'); // 4
