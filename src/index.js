import getClasses from "./getClasses";

getClasses();
console.log("kjo esht kot");
console.log("nuk bente gje");

const obj = { a: "alpha", b: "bravo" };
const newObj = { ...obj, c: "charlie" };
console.log(newObj);
