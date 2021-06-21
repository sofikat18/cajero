let billetesQuinientos = 20;
let billetesDoscientos = 20;
let billetesCien = 40;
let billetesCincuenta = 40;
let totalCajero =
  billetesQuinientos * 500 +
  billetesDoscientos * 20 +
  billetesCien * 40 +
  billetesCincuenta * 40;

let sobra = 0;

//Guarda en una constante la activación del botón
const btnRetirar = document.querySelector('#retirar');

btnRetirar.addEventListener('click', function () {
  /*Función que recupera el monto ingresado y retorna la cantidad de billetes
al dar click en el botón */

  let montoIngresado = document.getElementById('retiro').value;

  if (billetesQuinientos != 0 && montoIngresado >= 500) {
    /* Ahora, hay que comprobar cuántos billetes se necesitan para completar
el monto ingresado */

    let quinientos = Math.trunc(montoIngresado / 500);
    console.log(`Se entregan ${quinientos} billetes de $500.`);

    /* Lo siguiente es restar la cantidad de billetes entregados 
    del stock original*/

    billetesQuinientos = billetesQuinientos - quinientos;
    console.log(`Quedan en el cajero ${billetesQuinientos} billetes de $500`);

    /* También hay que revisar si hay sobrante del monto ingresado*/

    sobra = montoIngresado % 500;
    console.log(`Sobran ${sobra}`);
  } else if (
    (montoIngresado < 500 && montoIngresado >= 200) ||
    (billetesQuinientos <= 0 && billetesDoscientos != 0) ||
    (sobra != 0 && billetesDoscientos != 0)
  ) {
    /* Ahora hay que detener el proceso si billetesQuinientos llega a cero */
    console.log('No hay billetes de 500');

    /* Si no hay billetes de quinientos, tiene que revisar 
      con los de doscientos*/
    let doscientos = Math.trunc(montoIngresado / 200);
    console.log(`Se entregan ${doscientos} billetes de $200.`);

    /* Lo siguiente es restar la cantidad de billetes entregados 
    del stock original*/

    billetesDoscientos = billetesDoscientos - doscientos;
    console.log(`Quedan en el cajero ${billetesDoscientos} billetes de $200`);

    /* También hay que revisar si hay sobrante del monto ingresado*/

    sobra = montoIngresado % 200;
    console.log(`Sobran ${sobra}`);
  } else if (
    (montoIngresado < 200 && montoIngresado >= 100) ||
    (billetesDoscientos <= 0 && billetesCien != 0) ||
    (sobra > 0 && billetesCien != 0)
  ) {
    /* Ahora hay que detener el proceso si billetesDoscientos llega a cero */
    console.log('No hay billetes de 200');

    /* Si no hay billetes de doscientos, tiene que revisar 
      con los de cien*/
    let cien = Math.trunc(montoIngresado / 100);
    console.log(`Se entregan ${cien} billetes de $100.`);

    /* Lo siguiente es restar la cantidad de billetes entregados 
    del stock original*/

    billetesCien = billetesCien - cien;
    console.log(`Quedan en el cajero ${billetesCien} billetes de $100`);

    /* También hay que revisar si hay sobrante del monto ingresado*/

    sobra = montoIngresado % 100;
    console.log(`Sobran ${sobra}`);
  } else if (
    (montoIngresado < 100 && montoIngresado >= 50) ||
    (billetesCien <= 0 && billetesCincuenta != 0) ||
    (sobra > 0 && billetesCincuenta != 0)
  ) {
    /* Ahora hay que detener el proceso si billetesCien llega a cero */
    console.log('No hay billetes de 100');

    /* Si no hay billetes de cien, tiene que revisar 
 con los de cincuenta*/
    let cincuenta = Math.trunc(montoIngresado / 50);
    console.log(`Se entregan ${cincuenta} billetes de $50.`);

    /* Lo siguiente es restar la cantidad de billetes entregados 
del stock original*/

    billetesCincuenta = billetesCincuenta - cincuenta;
    console.log(`Quedan en el cajero ${billetesCincuenta} billetes de $50`);

    /* También hay que revisar si hay sobrante del monto ingresado*/

    sobra = montoIngresado % 50;
    console.log(`Sobran ${sobra}`);
  } else {
    console.log('Su operación no pudo ser completada.');
  }
});

/* Queda pendiente encontrar la forma de que el sobrante también sea 
considerado como el nuevo monto a recalcular. Se me ocurre guardarlo 
en una variable tipo nuevoMonto
*/
