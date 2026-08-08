const nilai = [90, 80, 85, 100, 95];
let total = 0;

for (let jumlah of nilai) {
    total += jumlah;
}

const rataRata = total / nilai.length;
console.log("Total nilai :", total);
console.log("Rata-rata :", rataRata);