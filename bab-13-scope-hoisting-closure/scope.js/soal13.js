function buatPenghitung() {
  let hitungan = 0;

  return function () {
    hitungan++;
    console.log(hitungan);
  };
}

const penghitungA = buatPenghitung();
const penghitungB = buatPenghitung();

penghitungA();
penghitungA();

penghitungB();

penghitungA();
penghitungB();

/* Output :
1
2
1
3
2
*/



/* Karena bro, buatPenghitung() dipanggil dua kali, dan setiap pemanggilan membuat variabel hitungan yang baru.
*/