var names = ['Nguyen', 'Huy', 'End'];

// cách bình thường
var name1 = names[0];
var name2 = names[1];
var name3 = names[2];

// với destructuring
const [first, second, third] = names;



var students = new Map();

students.set('id1', { name: 'Nguyen', age: 18 });
students.set('id2', { name: 'Huy' });
students.set('id3', { name: 'End' });

for (student of students) {
    const id = student[0];
    const name = student[1].name;
    const age = student[1].age || 7;
    console.log(`${name} is ${age} years old and has id: ${id}`);
}

// destructuring trong for
// for ([id, info] of students) {
//     const { name, age = 7 } = info;
//     console.log(`${name} is ${age} years old and has id: ${id}`);
// }