console.log("Aritmatika");
let a = 150;
let b = 40;

console.log("penjumblahan:", a + b);
console.log("pengurangan:", a - b);
console.log("perkalian:", a * b);
console.log("pembagian", a / b);
console.log("modulus(sisa bagi:", a % b);

// Assignment
console.log("Assignment");
let x = 35;


x += 5;
console.log;("x += 5=", x);
x -=2;
console.log("x -= 2 =", x);
x *=3;
console.log("x *= 3 =", x);
x  /= 2;
console.log("x /= 2 =", x);

//perbandingan
console.log("Perbandingan");
let c = 10;
let d = "10";

console.log("c == d :", c == d);
console.log("c === d:", a === d);
console.log("c != d :", c != d);
console.log("c !== d:", c !== d);
console.log("c > 5 :", c > 5);
console.log("c <= 10:", c <= 10);

//kondisional
console.log("kondisional");

let umur = 20;
let punyaKTP = true;

console.log("Boleh buat SIM", umur >= 17 && punyaKTP);
console.log("Remaja atau dewasa?", umur >= 13 || umur >= 20);
console.log("Bukan anak-anak?", !(umur < 13));