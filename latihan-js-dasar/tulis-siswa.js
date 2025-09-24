const fs = require("fs");

let siswa =[
 { 
     nama: "LiLY",
     kelas:"Web",
     nilai:[78, 92, 87],
 },
];

// Menyimpan data ke file siswa.JSON
fs.writeFileSync("siswa.json", JSON.stringify(siswa, null, 2));
console.log("data siswa berhasil ditulis ke file siswwa.jsoN");