const hargaBarang = "125000.50";
const jumlah = "3";

const harga = parseFloat(hargaBarang);
const jumlahNumber = Number(jumlah);

const subtotal = harga * jumlahNumber;

console.log("Harga   : Rp" + harga.toFixed(2));
console.log("Jumlah  :", jumlahNumber);
console.log("Subtotal: Rp" + subtotal.toFixed(2));