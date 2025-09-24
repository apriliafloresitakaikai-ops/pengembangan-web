// array awal berisi nilai siswa
let nilai = [75, 88, 92];

console.log("1. Nilai awal:");
nilai.forEach((n, i) => {
    console.log(`Siswa ${i + 1} : ${n}`);
});
console.log("");

// menambahkan nilai baru menggunakan push
nilai.push(60);
console.log("2. setelah nilai 60 di tambahkan (push):");
console.log(nilai);
console.log("");

// menghapus nilai terakhir menggunakan pop
let nilaiterakhir = nilai.pop();
console.log("3. setelah menghapus nilai terakhir (pop):", nilaiterakhir);
console.log("nilai sekarang:", nilai);
console.log("");

// munggunakan map untuk menambahkan bonus 5 poin ke semua nilai
let nilaibonus = nilai.map((n) => n + 5);
console.log("4. nilai ssetelah di tambahkan bonus 5 poin (map):");
console.log(nilaibonus);
console.log("");

// menampilkan nilai bonus dengan forEach
console.log("5. cetak nilai akhir siswa:");
nilaibonus.forEach((n, i) => {
    console.log(`Siswa ${i + 1} : ${n}`);
});