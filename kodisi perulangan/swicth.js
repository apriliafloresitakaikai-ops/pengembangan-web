let bulan = 6;
let namaBulan;

switch (bulan) {
  case 1:
     namaBulan = "Januari";
     break;
  case 2:
     namaBulan ="februari"
     break;
  case 3:
     namaBulan ="maret";
     break;
case 4:
     namaBulan ="April";
     break;
case 5:
     namaBulan ="Mei";
     break;
case 6:
     namaBulan ="Juni";
     break;
case 7:
     namaBulan ="Juli"
     break;
case 8:
     namaBulan ="Agustus"
     break;
case 9:
     namaBulan ="septembet"
     break;
case 10:
     namaBulan ="oktober"
     break;
case 11:
     namaBulan ="november"
     break;
case 12:
     namaBulan ="Desember"
     break;
     default:
        namaBulan = "nomor bulan tidak valid";
}

console.log("Bulan ke-" + bulan + " adalah " + namaBulan);