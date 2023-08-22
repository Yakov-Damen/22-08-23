// כל אובייקט מחויב בממשק או טיפוס

//1.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה את הסכום של כל המספרים הזוגיים במערך.
function sumOfEvenArr(arr : number[]) : number {
    let sum = arr.reduce((a, b) => b % 2 === 0? a + b : a, 0);
    return sum;
}
// 2.
// כתוב פונקציה שמקבלת אובייקט עם שני שדות: רוחב וגובה ומחזירה שטח של מלבן עם מידות אלו.
type Rectangle = {
    width : number,
    height : number
}
function rectangleArea(rectsize: Rectangle) : number {
    return rectsize.width * rectsize.height;
}
// 3.
// כתוב פונקציה שמקבלת מחרוזת ומחזירה אמת אם המחרוזת היא פלינדרום ושקר אם לא.
// פלינדרום היא מחרוזת שאפשר לקרוא אותה אותו הדבר מהסוף להתחלה.
// דוגמאות: אבא, אמא, שמש, ילד כותב בתוך דלי,1235321
function isPalindrome(str : string) : boolean {
    return str === str.split('').reverse().join('');
}

//4.
// כתוב פונקציה שמקבלת מערך של מחרוזות
// הפונקציה מחזירה מערך חדש של מחרוזות שבו האות הראשונה של כל מילה 'גדולה' ושאר האותיות 'קטנות' - לדוגמה
// uppEr -> Upper
function capitalize(str: string[]) : string[] {
    return str.map(word => word[0].toUpperCase() + word.slice(1));
}
// 5.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה מערך חדש עם המספרים הייחודיים בלבד (הסרת כפילויות).
function removeDuplicates(arr : number[]) : number[] {
    return [...new Set(arr)];
}
// 6.
// כתוב פונקציה שמקבלת אובייקט עם שדות עבור שם פרטי ושם משפחה
// הפונקציה מחזירה אובייקט המכיל את שתי שדות המתארות את ראשי התיבות של האובייקט
// דוגמה
// Input: { firstName: "John", lastName: "Doe" }
// Output: { firstInitial: "J", lastInitial: "D" }
// השתמשו בממשקים מתאימים עבור הקלט והםלט של הפונקציה
interface Name {
    firstName: string;
    lastName: string;
}
interface NameInitials {
    firstInitial: string;
    lastInitial: string;
}

function getInitials(person: Name) : NameInitials {
    return {
        firstInitial: person.firstName[0],
        lastInitial: person.lastName[0]
    };
}
// 7.
// כתוב פונקציה שמקבלת מערך של אובייקטים עם שדות שם וגיל, ומחזירה את הגיל הממוצע של כל האובייקטים במערך.

//  עבור המערך
// [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 30 },
//     { name: "Bob", age: 40 },
// ]
// Output: 31.666666666666668
interface Person {
    name: string;
    age: number;
}

function averageAge(persons: Person[]) : number {
    return persons.reduce((a, b) => a + b.age, 0) / persons.length;
}

// 8.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה את ערכי המקסימום והמינימום במערך כאובייקט בעל שדות מתאימים.
interface MaxAndMin {
    max: number;
    min: number;
}

function maxAndMin(arr: number[]) : MaxAndMin {
    return {max: Math.max(...arr), min: Math.min(...arr)};
}
// 9.
// כתוב פונקציה שמקבלת מערך ומדפיסה אותו בסדר הפוך
function reverseArray(arr: number[]) : number[] {
    return arr.reverse();
}