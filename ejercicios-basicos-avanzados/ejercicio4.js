const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

// 4.1
console.log(aldeanos[3]); 

// 4.2
aldeanos.push("Cervasio");

// 4.3
aldeanos[0] = "Bambina";

// 4.4
aldeanos.reverse();

// 4.5
aldeanos.splice(aldeanos.indexOf("Narciso"), 1, "Canela");
console.log(aldeanos)

// 4.6
console.log(aldeanos[aldeanos.length - 1]);