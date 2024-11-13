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
  let componentesTodo = fs.readFileSync('datos.json', 'utf-8');
  componentesTodo = JSON.parse(componentesTodo);
  return componentesTodo;
})

function compararfun(data) {
  const componentes = JSON.parse(
    fs.readFileSync('datos.json')
  )
  
  let filtrados = []

  Object.keys(componentes).forEach(marca => {
    componentes[marca].forEach(componente => {
      if (data.includes(componente.nombre)) {
        filtrados.push(componente)
      }
    })
  })

  return filtrados
}

sesionfun("hola", "1234");
onEvent("sesion", sesionfun);
onEvent("registro", registrofun);
onEvent("componentesComparar", compararfun);



startServer();
