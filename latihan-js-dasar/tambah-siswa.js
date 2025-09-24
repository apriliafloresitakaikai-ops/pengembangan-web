const fs = require("fs");

const filepath = "siswa.json";
let daftar = [];

// cek apakah file sudah ada
if (fs.existsSync(filepath)) {
    const content = fs.readFileSync(filepath, "utf8");
    daftar = JSON.parse(content);
}

// data siswa baru
let siswaBaru1 = {
    nama: "sunflower",
    kelas: "web",
    nilai: [93, 97, 83],
};

let siswaBaru2 = {
    nama:"magnolia",
    kelas: "web",
    nilai: [98, 77, 68],
};

// tambahkan ke array
daftar.push(siswaBaru1);
daftar.push(siswaBaru2);

// simpan kembali ke file
fs.writeFileSync(filepath, JSON.stringify(daftar, null, 2));
console.log("data siswa berhasil di tambahkan ke siswa.json");