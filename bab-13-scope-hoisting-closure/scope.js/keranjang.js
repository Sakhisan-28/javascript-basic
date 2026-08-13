function buatKeranjang() {
  const items = [];

  return {
    tambah(nama, harga) {
      items.push({
        nama: nama,
        harga: harga
      });

      console.log(`${nama} berhasil ditambahkan.`);
    },

    hapus(nama) {
      const index = items.findIndex(item => item.nama === nama);

      if (index !== -1) {
        items.splice(index, 1);
        console.log(`${nama} berhasil dihapus.`);
      } else {
        console.log(`${nama} tidak ditemukan.`);
      }
    },

    lihatKeranjang() {
      console.log("===== KERANJANG =====");

      if (items.length === 0) {
        console.log("Keranjang kosong.");
        return;
      }

      items.forEach((item, index) => {
        console.log(`${index + 1}. ${item.nama} - Rp${item.harga}`);
      });
    },

    hitungTotal() {
      let total = 0;

      for (const item of items) {
        total += item.harga;
      }

      return total;
    },

    jumlahItem() {
      return items.length;
    }
  };
}

const keranjang = buatKeranjang();

keranjang.tambah("Keyboard", 250000);
keranjang.tambah("Mouse", 150000);

keranjang.lihatKeranjang();

console.log("Total: Rp" + keranjang.hitungTotal());

keranjang.hapus("Mouse");

keranjang.lihatKeranjang();

console.log("Jumlah item:", keranjang.jumlahItem());

console.log(keranjang.items);