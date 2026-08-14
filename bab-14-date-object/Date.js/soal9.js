const tanggal = new Date(2026, 0, 1);

console.log(tanggal.getMonth()); 
console.log(tanggal.getDate());
console.log(tanggal.getFullYear());

/* Output : 
0
1
2026
*/

// getMonth() menghasilkan 0 karena bulan pada
// new Date(tahun, bulan, tanggal) dimulai dari 0.
// 0 = Januari