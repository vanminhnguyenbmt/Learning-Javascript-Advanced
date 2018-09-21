const companies = ["FPT", "VNG", "Viettel", "Intel", "Apple", "Facebook"];

// 1 - kiểu truyền thống

// for (let i = 0; i < companies.length; i++) {
//     if (companies[i] === 'VNG') {
//         continue;
//         // break;
//     }
//     console.log(companies[i]);
// }

// 2 - Functional

// companies.forEach(company => {
//     if (company === 'VNG') {
//         continue;
//         // break;
//     }
//     console.log(company);
// });

// 3 - For ... in

// Array.prototype.deleteAll = function() {
//     console.log('deleteAll feature here');
// }

// for(const index in companies) {
//     console.log(typeof index);
//     console.log(index);
//     console.log(`Cong ty ${companies[index]} co stt: ${index}`);
// }

// 4 - For ... of

// for (const [index, company] of companies.entries()) {
//     console.log(`Cong ty ${company} co stt: ${index}`);
// }

// // string

// var playerName = 'End Of The World 2012';

// for (const char of playerName) {
//     console.log(char);
// }

// function

// function sum() {
//     var total = 0;
//     console.log(typeof arguments);
//     for (const element of arguments) {
//         total += element;
//     }
//     console.log(total);
// }

// sum(1, 2, 3, 4, 5, 6, 7);

// object
const companyObject = {
    fpt: {
        name: "fpt"
    },
    vng: {
        name: "vng"
    },
    viettel: {
        name: "viettel"
    },
    apple: {
        name: "apple"
    },
    unicorn: {
        name: "unicorn"
    }
}

// for (const key in companyObject) {
//     if (companyObject.hasOwnProperty(key)) {
//         const element = companyObject[key];
//         console.log(element);
//     }
// }

for (var prop of Object.keys(companyObject)) {
    console.log(companyObject[prop]);
}