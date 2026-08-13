function buatSession(username) {
  let isLogin = true;

  return {
    cekStatus() {
      console.log("User:", username);

      if (isLogin) {
        console.log("Status: Login");
      } else {
        console.log("Status: Logout");
      }

      console.log("");
    },

    logout() {
      isLogin = false;
      console.log("Logout berhasil.");
      console.log("");
    },

    login() {
      isLogin = true;
      console.log("Login berhasil.");
      console.log("");
    }
  };
}

const session = buatSession("budi123");

session.cekStatus();

session.logout();

session.cekStatus();

console.log(session.isLogin);

const sessionBudi = buatSession("budi123");
const sessionAni = buatSession("ani456");

sessionBudi.logout();

sessionBudi.cekStatus();
sessionAni.cekStatus();