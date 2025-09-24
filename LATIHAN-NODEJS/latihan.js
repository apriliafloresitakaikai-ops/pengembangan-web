function cekGenapGanjil(angka) {
  // validasi input harus berubah angka 
  if (typeof angka !== 'number') {
    console.error("input harus berupa angka");
    return;
  }

  // cek apakah angka genap atau ganjil
  if (angka % 2 === 0) {
    console.log("bilangan genap");
  } else {
    console.log("bilangan ganjil");
  }
}


cekGenapGanjil(4);        //output: bilannga genap
cekGenapGanjil(13);       //output: bilannga ganjil
cekGenapGanjil("lima");   //output: input harus berupa angka
 