const fs = require("fs");

//membuka & membaca file json
//otomatris membuka
const teks = fs.readFileSync("data.json", "utf-8");
const data = JSON.parse(teks);

console.log("isi awal : ", data);

//menulis data baru ke array
data.push({ id: 4, nama: "jeremy", usia: 28 });

//menyimpan (menulis ulang)
//otomatis menutup
fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

console.log("data berhasil di tambahkan dan di simpan ulang");
console.log("isi akhir : ", data);