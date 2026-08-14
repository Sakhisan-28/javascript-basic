const sekarang = new Date();

const tahun = sekarang.getFullYear();
const bulan = sekarang.getMonth() + 1;
const tanggal = sekarang.getDate();
const hari = sekarang.getDay();
const jam = sekarang.getHours();
const menit = sekarang.getMinutes();

console.log("Tanggal :", tanggal + "-" + bulan + "-" + jam + "-" + menit);