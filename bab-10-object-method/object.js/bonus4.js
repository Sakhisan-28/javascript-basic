const playlist = {
    namaPlaylist: "Playlist Favorit",
    lagu: [],

    tambahLagu(judul) {
        this.lagu.push(judul);
    },

    hapusLagu(index) {
        this.lagu.splice(index, 1);
    },

    tampilkanPlaylist() {
        console.log("=== PLAYLIST ===");

        for (let i = 0; i < this.lagu.length; i++) {
            console.log(i + 1 + ". " + this.lagu[i]);
        }
    }
};

playlist.tambahLagu("Until I Found You - By Inets");
playlist.tambahLagu("Night Changes - By Inets");
playlist.tambahLagu("Someone You Loved - By Inets");
playlist.tambahLagu("Perfect - By Inets");
playlist.tambahLagu("Photograph - By Inets");

playlist.tampilkanPlaylist();