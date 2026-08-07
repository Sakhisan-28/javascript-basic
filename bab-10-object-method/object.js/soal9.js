const akunBank = {
    pemilik : "Budi",
    saldo : 100000,

    setor(jumlah) {
    this.saldo += jumlah;

    console.log("Saldo sekarang :", + this.saldo)
}
};

akunBank.setor(50000);
