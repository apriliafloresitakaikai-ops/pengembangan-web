//menambah elemen di akhir
let buah = ['apel', 'jeruk'];
buah.push('mangga');
console.log(buah);

//menghapus elemen terakhir
let buah1 = ['apel', 'jeruk', 'mangga'];
buah.pop();
console.log(buah);

//menambah elemen di awal
let buah3 = ['jeruk', 'mangga'];
buah.unshift('apel');
console.log(buah);

//menghapus elemen pertama
let buah4 = ['apel', 'jeruk', 'mangga'];
buah.shift();
console.log(buah);

//menambah elemen di posisi tertentu
let angka = [1, 2, 4, 5,];
angka.splice(2, 0, 3);
console.log(angka);

//menghapus elemen di posisi tertentu
let angka1 = [1, 2, 3, 4, 5];
angka.splice(2, 2);
console.log(angka);

//mengambil sebagaian array
let angka3 = [1, 2, 3, 4, 5];
let potong = angka.slice(1, 4);
console.log(potong);
console.log(angka);