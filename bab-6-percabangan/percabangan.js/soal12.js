let totalBelanja = 320000;


if (totalBelanja >= 500000) {
    console.log(totalBelanja -= 42000);
} else if (totalBelanja >= 250000) {
    console.log("Diskon: 10%")
    console.log("potongan: ", totalBelanja * 10 / 100);
    console.log("Total bayar :",totalBelanja -= 32000);
} else {
    console.log("Tidak ada diskon")
};

