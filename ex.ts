// retturns the bigger of two numbers
function returmBig(a: number, b: number) {
    return a > b? a : b;
}

// prints the bigger of two numbers
function printBig(a: number, b: number):void {
    console.log(returmBig(a, b));
}

// returns 'odd' or 'even' for a given number
function returmOddOrEven(n: number): string {
    return n % 2 === 0? 'even' : 'odd';
}

// returns the langth of a given string
function returmStringLength(s: string): number {
    return s.length;
}

// returns array of numbers strting from 1 to n
function arrayFrom1ToN(n: number): number[] {
    const arr: number[] = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}

// returns the biggest number in a given array
function biggestInArray(arr: number[]): number {
    let biggest: number = arr.reduce((bigger, current) => bigger > current? bigger : bigger = current);
    return biggest;
}

// Person type
interface Person {
    name: string;
    age: number;
    isStudent: boolean;
}

// returns a given person's data
function personData(person: Person): string {
    return `${person.name} is ${person.age} years old and is ${person.isStudent?'a student' : 'not a student'}`;
}

// returns a boolean indicating whether a given person is older than 18
function isOlderThan18(person: Person): boolean {
    return person.age > 18;
}

// interface Book
interface Book {
    title: string;
    author: string;
    year: number;
}

// type Reader
type Reader = Person & {fevoritBook: Book};

// returns the oldest reader in a given array of readers
function oldestReader(readers: Reader[]): Reader {
    let oldest: Reader = readers.reduce((oldest, current) => oldest.age < current.age? oldest: oldest = current);
    return oldest;
}

// returns the oldest book in a given array of readers
function oldestBook(readers: Reader[]): Book {
    let oldest: Reader = readers.reduce((oldest, current) => oldest.fevoritBook.year < current.fevoritBook.year? oldest: oldest = current);
    return oldest.fevoritBook;
}