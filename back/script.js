// @ts-ignore
import { onEvent, sendEvent, startServer } from "soquetic";
import fs from "fs"

function registrofun (Registro) {
  try {
    let registro = fs.readFileSync("back/Login.json", "utf8")
    registro = JSON.parse(registro);
    registro.push(Registro);

    fs.writeFileSync('back/Login.json', JSON.stringify(Login, null, 2), 'utf-8')

    return {ok: true}
  }
  catch (err) {

    return {ok: false};
}
};

function sesionfun(dato) 
{
    let dataCuentas = fs.readFileSync("back/Login.json", "utf-8")
        dataCuentas = JSON.parse(dataCuentas);

      dataCuentas.forEach(cuenta => {
        if (dato.nombre === cuenta.nombre)
        {
          if (dato.contraseña === cuenta.contraseña)
          {
            return {nombre: true, contraseña: true}
          }
          else
          {
            return {nombre: true, contraseña: false}
          }
        }
        else
        {
          return {nombre: false, contraseña: false}
        }
      })

    console.log(data)
}


onEvent("sesion", sesionfun);
onEvent("registro", registrofun);
startServer();
