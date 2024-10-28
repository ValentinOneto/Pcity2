// @ts-ignore
import { onEvent, sendEvent, startServer } from "soquetic";
import fs from "fs"

function loginfun (login) {
  try {
    let Login = fs.readFileSync("back/Login.json", "utf8")
    Login = JSON.parse(Login);
    Login.push(login);

    fs.writeFileSync('back/Login.json', JSON.stringify(Login, null, 2), 'utf-8')

    return {ok: true}
  }
  catch (err) {

    return {ok: false};
}
};



onEvent("Datos", datosfun);
onEvent("Login", loginfun);
onEvent("Pcs", pcsfun);
startServer();
