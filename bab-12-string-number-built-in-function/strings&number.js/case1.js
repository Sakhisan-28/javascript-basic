const username = "   AB   ";

const usernameBersih = username.trim();
const usernameNormal = usernameBersih.toLowerCase();

console.log("Username:", usernameNormal);

if (usernameNormal.length >= 5) {
    console.log("Username valid");
} else {
    console.log("Username terlalu pendek");
}