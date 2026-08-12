const pajak = 10;

function hitungHarga(harga) {
  const totalPajak = harga * (pajak / 100); // 1.variable pajak dapat di akses disini.

  return harga + totalPajak;
}

console.log(hitungHarga(100000)); // Output : 2.Total pajak = 111000

// 3.Karna pajak berada di Global scope
// 4.Tidak bisa (error)
