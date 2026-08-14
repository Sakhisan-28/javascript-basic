const tanggal = new Date("2026-08-17");

tanggal.setDate(25);
tanggal.setMonth(11);

const tgl = tanggal.getDate();
const bln = tanggal.getMonth() + 1;
const thn = tanggal.getFullYear();

console.log(tgl + "/" + bln + "/" + thn);