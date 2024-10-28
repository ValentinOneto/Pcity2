// @ts-ignore
import { onEvent, sendEvent, startServer } from "soquetic";
import fs from "fs"

let datosfun = fs.readFileSync("Datos.json", "utf8")
console.log(datos);

let loginfun = fs.readFileSync("Login.json", "utf8")
console.log(Login);

let pcsfun = fs.readFileSync("Pcs.json", "utf8")
console.log(Pcs);

onEvent("Datos", datosfun)
onEvent("Login", loginfun)
onEvent("Pcs", pcsfun)

