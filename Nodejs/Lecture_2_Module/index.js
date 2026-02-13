// console.log("we are learning about module in node.js")
const { sub, sum, mul, div } = require("./utils")

// import {sum, mul, div, sub} from "./utils"
console.log("adding two number = ", sum(10, 20));
console.log("multiplying two number = ", mul(10, 20));
console.log("division two number = ", div(10, 20));