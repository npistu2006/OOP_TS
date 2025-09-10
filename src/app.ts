import { NumberSeries, type BaseOp } from "./NumberSeries.js"
import { NumberSeries2 } from "./NumberSeries2.js";

// Példányosítás
const n = new NumberSeries(30, 8);
console.log(n.run("print"));
console.log(n.values);
n.values= [ 1/3, 3, 2]
console.log(n.run("print"));

console.log("***********************************************");
const s = new NumberSeries2(10,4);
console.log(s.run("print"));
console.log(s.div());