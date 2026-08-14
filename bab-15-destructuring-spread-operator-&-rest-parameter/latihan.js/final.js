const timFrontend = [
  "Budi",
  "Andi",
  "Citra",
];

const timBackend = [
  "Doni",
  "Eko",
];

const timGabungan = [...timFrontend, ...timBackend, "Fajar"]

function tampilkanTim(namaTim, ...anggota) {
  console.log("=============================");
  console.log("     " + namaTim.toUpperCase());
  console.log("=============================");
  console.log("");

  let nomor = 1;

 for (const anggotaTim of anggota) {
  console.log(nomor + ". " + anggotaTim);
  nomor++;
}
}

tampilkanTim("Developer Team", ...timGabungan);