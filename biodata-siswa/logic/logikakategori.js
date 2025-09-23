//menyimpan fungsi kategori untuk menentukan kategori

// membuat nama fungsi kategori lulus
function kategorilulus(tahun){
   let kategori = "";
if (tahun < 2019){
   kategori = "lulus sebelum covid";
}else if (tahun >=2019 && tahun <= 2021){
   kategori = "lulus saat covid";
}else if (tahun > 2021)
   kategori = "lulus setelah covid";
return kategori;
};


//mengekspor fungsi agar bisa digunakan di fiem lain
module.exports = kategorilulus;