// fungsi untuk menghitung luas persegi
function hitungluas(sisi) {
  return sisi * sisi;
}

// fungsi untuk menghitung  keliling persegi
function hitungkeliling(sisi) {
  return 4 * sisi;
}

// fungsi utama untuk menampilkan hasil
function tampilkanpersegi(sisi) {
   console.log("============== persegi ==============");
   console.log("sisi             :", sisi);
   console.log("luas persegi     :", hitungluas(sisi));
   console.log("keliling persegi :", hitungkeliling(sisi));
   console.log("=====================================/n");
}

// pemanggilan fungsi
tampilkanpersegi(7);
tampilkanpersegi(23);