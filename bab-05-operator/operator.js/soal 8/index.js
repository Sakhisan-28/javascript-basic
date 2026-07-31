let sudahLogin = true;
let sudahVerifikasi = false;
let premium = true;

let bolehMasuk = sudahLogin && sudahVerifikasi;
let dapatFiturPremium =  sudahVerifikasi || premium;

console.log(bolehMasuk);
console.log(dapatFiturPremium);