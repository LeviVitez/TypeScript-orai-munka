"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./Book");
let bookList = [new Book_1.Book("Dune", 10), new Book_1.Book("Solaris", 0), new Book_1.Book("Where the Crawdads sing", 12)];
for (let index = 0; index < 30; index++) {
    bookList.push(new Book_1.Book("Book #" + index, Math.floor((Math.random() * 10)) + 1));
}
bookList.forEach(element => {
    console.log(element.toString());
});
bookList.forEach(element => {
    if (element.getertekeles() > 7) {
        console.log(element.toString());
    }
});
function bestOf(list) {
    let max = 0;
    let maxIndex = 0;
    for (let index = 0; index < list.length; index++) {
        if (list[index].getertekeles() > max) {
            max = list[index].getertekeles();
            maxIndex = index;
        }
    }
    return list[maxIndex].toString();
}
console.log("A legjobb könyv:", bestOf(bookList));
