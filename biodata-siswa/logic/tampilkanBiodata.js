/**
 * fungsi untuk menampilkan salam ke terminal
 * autor : april 
 * versional : 1,0
 * date : 8 juli 2025
 */

const { nama, umur, asal, tahun, sekolah} = require("../data/siswa"); 
const kategorilulus = require("../logic/logikakategori"); //mengakses file
const desk = require("../config/aplikasi");

const kategori = kategorilulus (tahun);


function tampilkandatasiswa(){
 //menampilkan informasi biodata siswa
  console.log("=== BIODATA SISWA===");
console.log(`nama                 :`,nama);
console.log(`umur                 :`, umur);
console.log(`asal                 :`, asal);
console.log(`asal                 :`, tahun);
console.log(`sekolah              :`, sekolah);
console.log(`kategori kondisi     :`, kategori);

//menampilkan informasi aplikasi
  console.log("/n==== INFO APLIKASI====");
  console.log(`versi aplikasi     :`, desk.APP_VERSIONAL); //memanggil desk
  console.log(`penang jawab       :`, desk.APP_COMPANY); // memanggil desk
}


//mengekspor fungsi agar bisa digunakan di file lain
module.exports = tampilkandatasiswa;