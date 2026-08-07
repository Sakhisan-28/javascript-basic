const game = {
    pemain : "Sanji",
    nyawa : 100,


    terkenaSerangan(damage) {
    this.nyawa -= damage;
    console.log("Nyawa sekarang :", this.nyawa)
    }
}



game.terkenaSerangan(30)