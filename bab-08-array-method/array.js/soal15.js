let inventaris = [
  "Laptop",
  "Mouse",
  "Keyboard",
  "Monitor",
];

inventaris.splice(1,1,"Headset");
console.log(inventaris);

console.log(inventaris.indexOf("Keyboard"));
console.log(inventaris.includes("Pronter"));


console.log(inventaris.slice(-2))

