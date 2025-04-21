//Gobal scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst= "I'm a global constant";

{
    // Block scope
    var blockVar = "I'm a blocked-scoped var";
    let blockLet = "I'm a blocked-scoped let";
    const blockConst = "I'm a blocked-scoped const"; 
}

// Glocal scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
//console.log(blockVar);
//console.log(blockLet);

function show(){
    var functionVar = " im a block scoped var";
    let functionLet = " im a block scoped let";
    const functionConst = " im a block scoped const";

}
show();
console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError