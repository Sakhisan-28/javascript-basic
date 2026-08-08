const laptop = {
  merek: "ASUS",
  ram: "16GB",
  storage: "512GB",
};
for (let data in laptop) {
    console.log(data);
    console.log(laptop[data]);
}