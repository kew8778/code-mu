"use script";

// #1
let now = new Date();
let noon = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);

console.log(now >= noon); // true

// #2
let halfMonth = new Date(now.getFullYear(), now.getMonth(), 15);

console.log(now >= halfMonth); // true