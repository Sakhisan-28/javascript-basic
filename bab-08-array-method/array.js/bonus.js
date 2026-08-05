let playlist = [];

playlist.push("song cover by.ines");
playlist.push("Alan Walker");
playlist.push("Dimas");
playlist.push("One ok rock");
playlist.push("Dj Indon");

playlist.pop();
playlist.unshift("Helena");

console.log("=== Playlist Saya ===");
for (let i = 0; i < playlist.length; i++) {
    console.log(i + 1 + ".", playlist[i])
}

console.log("Total lagu :", playlist.length);