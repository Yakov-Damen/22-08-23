// כל אובייקט מחויב בממשק או טיפוס
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//1.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה את הסכום של כל המספרים הזוגיים במערך.
function sumOfEvenArr(arr) {
    var sum = arr.reduce(function (a, b) { return b % 2 === 0 ? a + b : a; }, 0);
    return sum;
}
function rectangleArea(rectsize) {
    return rectsize.width * rectsize.height;
}
// 3.
// כתוב פונקציה שמקבלת מחרוזת ומחזירה אמת אם המחרוזת היא פלינדרום ושקר אם לא.
// פלינדרום היא מחרוזת שאפשר לקרוא אותה אותו הדבר מהסוף להתחלה.
// דוגמאות: אבא, אמא, שמש, ילד כותב בתוך דלי,1235321
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
//4.
// כתוב פונקציה שמקבלת מערך של מחרוזות
// הפונקציה מחזירה מערך חדש של מחרוזות שבו האות הראשונה של כל מילה 'גדולה' ושאר האותיות 'קטנות' - לדוגמה
// uppEr -> Upper
function capitalize(str) {
    return str.map(function (word) { return word[0].toUpperCase() + word.slice(1); });
}
// 5.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה מערך חדש עם המספרים הייחודיים בלבד (הסרת כפילויות).
function removeDuplicates(arr) {
    return __spreadArray([], new Set(arr), true);
}
function getInitials(person) {
    return {
        firstInitial: person.firstName[0],
        lastInitial: person.lastName[0]
    };
}
function averageAge(persons) {
    return persons.reduce(function (a, b) { return a + b.age; }, 0) / persons.length;
}
function maxAndMin(arr) {
    return { max: Math.max.apply(Math, arr), min: Math.min.apply(Math, arr) };
}
// 9.
// כתוב פונקציה שמקבלת מערך ומדפיסה אותו בסדר הפוך
function reverseArray(arr) {
    return arr.reverse();
}
