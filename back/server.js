import { onEvent, sendEvent, startServer } from "soquetic";
import fs from "fs"

let datos = fs.readFileSync("Datos.json", "utf8")
console.log(datos);
