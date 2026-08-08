const nilai = [75, 90, 88, 100, 67, 95];

let terbesar = 0;

for (let angka of nilai) {
    if (angka > terbesar) {
        terbesar = angka;
    }
}

console.log("Nilai tertinggi :", terbesar);