// @ts-ignore
import { onEvent, sendEvent, startServer } from "soquetic";
import fs from "fs"
import { REFUSED } from "dns";

function registrofun (info) {
  try {
    let registro = fs.readFileSync("./Login.json", "utf8")
    registro = JSON.parse(registro);
    registro.push(info);

    fs.writeFileSync('./Login.json', JSON.stringify(registro, null, 2), 'utf-8')

    return {ok: true}
  }
  catch (err) {

    return {ok: false};
}
}

function sesionfun(nombre, contraseña) 
{
    let dataCuentas = fs.readFileSync("./Login.json", "utf-8")
        dataCuentas = JSON.parse(dataCuentas);
        const credenciales = dataCuentas.some(user => user.nombre === nombre && user.contraseña === contraseña);
        console.log(credenciales);
        return credenciales;

}

onEvent('componentes', () => {
  let componentes = JSON.parse(fs.readFileSync('Datos.json', 'utf-8'));
  return componentes;
})

function compararfun(data) {
  const componentes = JSON.parse(
    fs.readFileSync('Datos.json')
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

function procesadoresfun () {
  const componentes = JSON.parse(
    fs.readFileSync('Datos.json')
  )

  let procesadores = {}

  Object.keys(componentes).forEach(tipo => {
    if (tipo === "procesadores AMD") {
      procesadores["procesadores AMD"] = componentes[tipo]
    }
    if (tipo === "procesadores Intel") {
      procesadores["procesadores Intel"] = componentes[tipo]
    }
  })

  return procesadores; 
}

function mothersfun () {

  const componentes = JSON.parse(
    fs.readFileSync('Datos.json')
  )

  let motherboards = {}

  Object.keys(componentes).forEach(tipo => {
    if (tipo === "motherboard") {
      motherboards["motherboard"] = componentes[tipo]
    }
  })

  return motherboards; 
}


function ramsfun () {

  const componentes = JSON.parse(
    fs.readFileSync('Datos.json')
  )

  let rams = {}

  Object.keys(componentes).forEach(tipo => {
    if (tipo === "ram") {
      rams["ram"] = componentes[tipo]
    }
  })

  return rams; 

}

function graficasfun () {

  const componentes = JSON.parse(
    fs.readFileSync('Datos.json')
  )

  let gpus = {}

  Object.keys(componentes).forEach(tipo => {
    if (tipo === "gpu") {
      gpus["gpu"] = componentes[tipo]
    }
  })

  return gpus; 

}

function discosfun () {
  
  const componentes = JSON.parse(
    fs.readFileSync('Datos.json')
  )

  let discos = {}

  Object.keys(componentes).forEach(tipo => {
    if (tipo === "disco") {
      discos["disco"] = componentes[tipo]
    }
  })

  return discos; 

}



function resultadofun (recibidos){
  try {
    const categorias = [
  "procesadores AMD",
  "procesadores Intel",
  "motherboard",
  "ram",
  "gpu",
  "disco"
];

    const componentes = JSON.parse(fs.readFileSync('Datos.json'))
    let componente_comparar = []

    for (let categoria in componentes) {

      for (let i = 0; i < componentes[categoria].length; i++) {
        let componente = componentes[categoria][i];

        if (componente.nombre === recibidos[0]) {
          console.log(recibidos[0]);
          componente_comparar.push(componente)
          console.log(componente);
        }
        if (componente.nombre === recibidos[1]) {
          componente_comparar.push(componente)
          console.log(componente);
        }
      }
    }
  
    return {componente_comparar};

  } catch (err) {
    
    return {ok: false};
  }
}




sesionfun("hola", "1234");
onEvent("sesion", sesionfun);
onEvent("registro", registrofun);
onEvent("componentesComparar", compararfun);
onEvent("procesadores", procesadoresfun); 
onEvent("motherboards", mothersfun);
onEvent("rams", ramsfun);
onEvent("graficas", graficasfun); 
onEvent("discos", discosfun);
onEvent("resultadoComparar", resultadofun);



startServer();
