const rekening = {
    pemilik : "Sanji san",
    saldo : 1000000,

    setor(jumlah) {
    this.saldo += jumlah;
    console.log("Setor : Rp" + jumlah);
    console.log("Saldo : Rp" + this.saldo);
},

   tarik(jumlah) {
    if (jumlah > this.saldo) {
        console.log("Saldo tidak mencukupi");
        return;
    }

    this.saldo -= jumlah;
    console.log("Tarik : Rp" + jumlah);
    console.log("Saldo : Rp" + this.saldo);
},
    cekSaldo() {
    console.log("Saldo : Rp" + this.saldo);
},
};

rekening.cekSaldo();

rekening.setor(500000);
rekening.tarik(200000);