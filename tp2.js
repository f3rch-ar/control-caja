// TP 2 - German Lantanio, Fernando Carrazana

let registros = [
  { patente: "AB123CD", velocidad: 120, tipo: "auto",   km: 150 },
  { patente: "XY987ZW", velocidad: 95,  tipo: "camion", km: 300 },
  { patente: "MN456GH", velocidad: 135, tipo: "auto",   km: 80  },
  { patente: "QR789JK", velocidad: 88,  tipo: "moto",   km: 45  },
  { patente: "ST012LM", velocidad: 125, tipo: "auto",   km: 200 }
];

// Respuesta 1

let reporteMultas = registros.map(vehiculo => {
  let monto = 0;
  
  if (vehiculo.velocidad > 110 && vehiculo.velocidad <= 130) {
    monto = 5000;
  } else if (vehiculo.velocidad > 130) {
    monto = 10000;
  }

  return {
    patente: vehiculo.patente,
    monto: monto
  };
});

console.log("----- REPORTE DE MULTAS -----");
console.log(reporteMultas);

// Respuesta 2

let infractores = registros.filter(vehiculo => vehiculo.velocidad > 110);

console.log("\n---- INFRACTORES -----");
console.log("Cantidad de infractores: ", infractores.length);
console.log("Patentes de infractores: ", infractores.map(v => v.patente));

// Respuesta 3

let totalKm = registros.reduce((acumulador, vehiculo) => {
  return acumulador + vehiculo.km;
}, 0);

let recaudacion = reporteMultas.reduce((acumulador, multa) => {
  return acumulador + multa.monto;
}, 0);

console.log("\n----- REPORTE FINAL -----");
console.log(La flota recorrio ${totalKm} km y genero $${recaudacion} en multas.);