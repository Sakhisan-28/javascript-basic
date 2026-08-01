let umur = 18;

if (umur <= 0 && umur >= 5) {
    console.log("Kategori : Belita");
} else if (umur >= 6 && umur<= 12) {
    console.log("Karegori : Anak-anak");
}  else if (umur >= 13 && umur <= 17) {
    console.log("Karegori : Dewasa");
}  else if (umur >= 18 && umur <= 59) {
    console.log("Karegori : Dewasa");
} else {
    console.log("Kategori : Lansia")
}