const nama = "Global"; // Global Scope

function luar() {
  const nama = "Luar"; // function scope

  function dalam() {
    const nama = "Dalam"; // function scope

    console.log(nama);  // Output : "Dalam"
  }

  dalam();
  console.log(nama); // Output : "Luar"
}

luar();
console.log(nama); // Output : "Global"

/* karna javascript selalu mencari variable yang paling dekat, dan prinsip ini disebut Scope Chain*/