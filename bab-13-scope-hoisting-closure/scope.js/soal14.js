function buatCounter() {
    let klik = 0;

    return function tambah() {
    klik++;
    console.log("Jumlah klik:", klik)
};

};




const counter = buatCounter();

counter();
counter();
counter();
counter();