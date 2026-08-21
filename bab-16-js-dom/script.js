const santri = {
  nama: "Budi Santoso",
  kelas: "XI RPL",
  status: "Aktif"
};

const aktivitas = [
  "Login ke aplikasi",
  "Membaca materi JavaScript",
  "Mengerjakan latihan",
  "Mengumpulkan tugas"
];


const namaSantri = document.querySelector("#nama");
const kelasSantri = document.querySelector("#kelas");
const statusSantri = document.querySelector("#status");

namaSantri.textContent = santri.nama;
kelasSantri.textContent = santri.kelas;
statusSantri.textContent = santri.status;

const daftarAktivitas = document.querySelector("#daftarAktivitas");
for (let kegiatan of aktivitas) {
    const item = document.createElement("li");
    item.textContent = kegiatan;
    daftarAktivitas.appendChild(item)
};

