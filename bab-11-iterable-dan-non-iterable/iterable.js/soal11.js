const angka = [10, 20, 30];

for (let item in angka) {
  console.log(item);
}

// output : "0", "2", "3";

// alasan : Karena Object bukan Iterable, jadi for...of tidak dapat digunakan.