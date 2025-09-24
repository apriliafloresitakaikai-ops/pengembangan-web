//Tipe Data Primitif
console.log("Tipe Data Primitif");

let nama="april";
let umur=15;
let lulus=true;
let nilaiujian=null;
let jurusan;
let kode = Symbol("kode");
console.log("Nama        :   ",nama);
console.log("Umur        :   ",umur);
console.log("Lulus       :   ",lulus);
console.log("Nilai ujian :   ",nilaiujian);
console.log("Jurusan     :   ",jurusan);
console.log("Symbol      :   ",kode);




//Tipe Data Non primitif
console.log("===Tipe Data Non Primitif===");
let buah = ["mangga"," apel", "jeruk"];
let siswa={

    nama: "Ani",
    umur: "17",
    lulus:true
};

function sapa(){
    return "Hallo Dunia!";

}
console.log("Array/t:"+buah);
console.log("object/t:",siswa);
console.log(sapa());
    