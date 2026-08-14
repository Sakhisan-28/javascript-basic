const sekarang = new Date("2026-08-13");
const deadline = new Date("2026-08-20");

const sekarangMs = sekarang.getTime();
const deadlineMs = deadline.getTime();

const selisihMs = deadlineMs - sekarangMs;

console.log("Deadline: 20 Agustus 2026");

if (selisihMs < 0) {
  console.log("Deadline sudah terlewat.");
} else {
  const hari = Math.ceil(
    selisihMs / (1000 * 60 * 60 * 24)
  );

  console.log("Sisa waktu:", hari, "hari lagi");
}