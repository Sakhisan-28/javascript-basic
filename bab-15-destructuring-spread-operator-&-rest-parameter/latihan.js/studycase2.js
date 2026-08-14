const keranjangA = [
  "Keyboard",
  "Mouse",
];

const keranjangB = [
  "Monitor",
  "Headset",
];

const keranjangGabungan = [...keranjangA, ...keranjangB];

const [pertama, kedua, ,terakhir] = keranjangGabungan;
console.log("Produk pertama :" ,pertama);
console.log("Produk kedua :", kedua);
console.log("Produk terakhir :", terakhir);