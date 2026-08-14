const nilai = [80, 90, 75, 95, 85];

 function prosesNilai(...nilai) {
     const tertinggi = Math.max(...nilai);
     const terendah = Math.min(...nilai);

    let total = 0

    for (const prosesNilai of nilai) {
        total += prosesNilai;  
    }    return {
          tertinggi: tertinggi,
          terendah: terendah,
          total: total,
};

};

const hasil = prosesNilai(80, 90, 75, 95, 85);
const {tertinggi, terendah, total} = hasil;

console.log("Nilai tertinggi :", tertinggi);
console.log("Nilai terendah  :", terendah);
console.log("Total nilai     :", total);
