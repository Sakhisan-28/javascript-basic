let berat = 65;
let tinggi = 1.7;

function hitungBMI(berat, tinggi) {
    return berat / (tinggi * tinggi)
}

const bmi = hitungBMI(berat, tinggi);
console.log("BMI :", bmi);