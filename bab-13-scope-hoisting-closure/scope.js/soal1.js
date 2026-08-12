const nama = "Budi"; // Global scope = dia dibuat di luar function

function belajar() {
  const bahasa = "JavaScript"; // Local scope = karna dia dibuat didalam funsi ini

  if (true) {
    let level = "Pemula";
    console.log(level); // Block scope = karna ia hanya bisa diakses didalam blok tersebut.
  }
}