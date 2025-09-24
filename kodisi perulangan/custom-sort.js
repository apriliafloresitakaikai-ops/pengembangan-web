let siswa = [
  { nama: "Ali", nilai: 85 },
  { nama: "Budi", nilai: 92 },
  { nama: "Cici", nilai: 75 }
];

siswa.sort((a, b)=> b.nilai - a.nilai);
console.log(siswa);
//urutan dari nilai tertinggi ke terendah