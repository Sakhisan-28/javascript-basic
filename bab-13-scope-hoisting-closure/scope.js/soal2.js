const nama = "Budi";

function tampilkanNama() {
  const umur = 17;

  console.log(nama);
  console.log(umur);
}

tampilkanNama();

console.log(nama); // output : Budi = karna di terletak diglobal (diluar function), jadi dapat di akses.
console.log(umur); // output error = karna dia bisa di akses hanya jika dipanggil bagian dalam function