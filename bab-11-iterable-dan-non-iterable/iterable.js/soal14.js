const daftarBelanja = [
  "Beras",
  "Minyak",
  "Gula",
  "Telur",
  "Sabun",
];

let nomor = 1;

for (let data of daftarBelanja) {
    console.log(nomor + ".", data);
    nomor++;
}