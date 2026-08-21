const formPesanan = document.querySelector("#formPesanan");

const daftarPesanan = document.querySelector("#daftarPesanan");

const inputNama = document.querySelector("#nama");
const inputEmail = document.querySelector("#email");
const inputFilm = document.querySelector("#judul");

let nomorPesanan = 1;
formPesanan.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const nama = inputNama.value.trim();
  const email = inputEmail.value.trim();
  const film = inputFilm.value.trim();

  if (nama === "" || email === "" || film === "") {
    alert("Silakan isi semua field.");
    return;
  }
  const infoPesanan = document.createElement("div");

 infoPesanan.className = "participant-info";
  const itemPesanan = document.createElement("li");

infoPesanan.textContent = `${nomorPesanan}. ${nama} - ${email} - ${film}`;

const aksiPesanan = document.createElement("div");

aksiPesanan.className = "participant-actions";


daftarPesanan.appendChild(itemPesanan);
itemPesanan.className = "participant-item";
itemPesanan.appendChild(infoPesanan);

const tombolHapus = document.createElement("button");
tombolHapus.className = "btn-small btn-small-danger";

tombolHapus.textContent = "Hapus";

aksiPesanan.appendChild(tombolHapus);
itemPesanan.appendChild(aksiPesanan);

tombolHapus.addEventListener("click", () => {
  itemPesanan.remove();
});

inputNama.value = "";
inputEmail.value = "";
inputFilm.value = "";

nomorPesanan++;

});