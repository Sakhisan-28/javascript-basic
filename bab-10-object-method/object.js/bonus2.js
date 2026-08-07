const produk = {
    nama : "Roti",
    harga : 10000,
    stok : 5,

    tambahStok(jumlah) {
        this.stok += jumlah;
    },

    kurangiStok(jumlah) {
        this.stok -= jumlah;
    },

   tampilkanInfo() {
    console.log("Nama  :", this.nama);
    console.log("Harga :", this.harga);
    console.log("Stok  :", this.stok);
}
};

produk.tambahStok(10);
produk.kurangiStok(3);

produk.tampilkanInfo();