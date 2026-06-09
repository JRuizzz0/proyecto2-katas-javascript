let placesToTravel2 = [
  { id: 5, name: "Japan" }, { id: 11, name: "Venecia" }, { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" }, { id: 44, name: "Filipinas" }, { id: 59, name: "Madagascar" }
];


for (let i = placesToTravel2.length - 1; i >= 0; i--) {
  if (placesToTravel2[i].id === 11 || placesToTravel2[i].id === 40) {
    placesToTravel2.splice(i, 1);
  }
}
console.log(placesToTravel2);