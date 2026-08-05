function cekKelulusan(nilai) {
    if (nilai >= 75) {
        return "Lulus";
    }
    return "Tidak Lulus";
}

console.log(cekKelulusan(80));
console.log(cekKelulusan(60));