// @ts-ignore
import { onEvent, sendEvent, startServer } from "soquetic";
import fs from "fs"

function registrofun (Registro) {
  try {
    let registro = fs.readFileSync("./Login.json", "utf8")
    registro = JSON.parse(registro);
    registro.push(Registro);

    fs.writeFileSync('./Login.json', JSON.stringify(Login, null, 2), 'utf-8')

    return {ok: true}
  }
  catch (err) {

    return {ok: false};
}
};

function sesionfun(nombre, contraseña) 
{
    let dataCuentas = fs.readFileSync("./Login.json", "utf-8")
        dataCuentas = JSON.parse(dataCuentas);
        const credenciales = dataCuentas.some(user => user.nombre === nombre && user.contraseña === contraseña);
        console.log(credenciales);
        return credenciales;

}

onEvent('componentes', () => {
  let componentes = fs.readFileSync('datos.json', 'utf-8');
  componentes = JSON.parse(componentes);
  return componentes;
})



sesionfun("hola", "1234");
onEvent("sesion", sesionfun);
onEvent("registro", registrofun);
onEvent("COmparacion", comparacionfun);
startServer();
