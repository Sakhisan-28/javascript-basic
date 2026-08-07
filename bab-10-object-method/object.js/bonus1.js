const biodata = {
    nama : "Sanji san",
    umur : 18,
    pekerjaan : "Pelajar",
    kota : "Bogor",

    tampilkanBiodata() {
        console.log("===== BIODATA =====");
        console.log("Nama ;", this.nama);
        console.log("Umur ;", this.umur);
        console.log("Pekerjaan;", this.pekerjaan);
        console.log("Kota :", this.kota);
        console.log("===================")
    }
}

biodata.tampilkanBiodata();