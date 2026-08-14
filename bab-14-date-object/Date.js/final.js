const tugas = [
  {
    nama: "Membuat Website Portfolio",
    deadline: "2026-08-20",
  },
  {
    nama: "Mengerjakan Latihan JavaScript",
    deadline: "2026-08-15",
  },
  {
    nama: "Presentasi Project",
    deadline: "2026-09-01",
  },
];

const sekarang = new Date();

console.log("===== DAFTAR TUGAS =====");
console.log("");

for (const item of tugas) {
  const deadline = new Date(item.deadline);

  const selisihMs = deadline.getTime() - sekarang.getTime();

  const hari = Math.ceil(
    selisihMs / (1000 * 60 * 60 * 24)
  );

  const tanggal = deadline.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  console.log(item.nama);
  console.log("   Deadline:", tanggal);

  if (selisihMs < 0) {
    console.log("   Status  : Deadline sudah terlewat.");
  } else {
    console.log("   Status  :", hari, "hari lagi");
  };

  console.log("");
};