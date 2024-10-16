// @ts-ignore
import { onEvent, sendEvent, startServer } from "soquetic";
import fs from "fs"

let datos = fs.readFileSync("Datos.json", "utf8")
console.log(datos);

let Login = fs.readFileSync("Login.json", "utf8")
console.log(Login);

let Pcs = fs.readFileSync("Pcs.json", "utf8")
console.log(Pcs);