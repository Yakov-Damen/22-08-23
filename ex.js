// retturns the bigger of two numbers
function returmBig(a, b) {
    return a > b ? a : b;
}
// prints the bigger of two numbers
function printBig(a, b) {
    console.log(returmBig(a, b));
}
// returns 'odd' or 'even' for a given number
function returmOddOrEven(n) {
    return n % 2 === 0 ? 'even' : 'odd';
}
// returns the langth of a given string
function returmStringLength(s) {
    return s.length;
}
// returns array of numbers strting from 1 to n
function returmArrayFrom1ToN(n) {
    var arr = [];
    for (var i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}
// returns the biggest number in a given array
function returmBiggestInArray(arr) {
    var biggest = arr.reduce(function (bigger, current) { return bigger > current ? bigger : bigger = current; });
    return biggest;
}
// returns a given person's data
function returmPersonData(person) {
    return "".concat(person.name, " is ").concat(person.age, " years old and is ").concat(person.isStudent ? 'a student' : 'not a student');
}
// returns a boolean indicating whether a given person is older than 18
function returmIsOlderThan18(person) {
    return person.age > 18;
}
// returns the oldest reader in a given array of readers
function returmOldestReader(readers) {
    var oldest = readers.reduce(function (oldest, current) { return oldest.age < current.age ? oldest : oldest = current; });
    return oldest;
}
// returns the oldest book in a given array of readers
function returmOldestBook(readers) {
    var oldest = readers.reduce(function (oldest, current) { return oldest.fevoritBook.year < current.fevoritBook.year ? oldest : oldest = current; });
    return oldest.fevoritBook;
}
