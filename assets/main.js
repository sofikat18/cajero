let billetesQuinientos = 20;
let billetesDoscientos = 20;
let billetesCien = 40;
let billetesCincuenta = 40;
let totalCajero =
  billetesQuinientos * 500 +
  billetesDoscientos * 20 +
  billetesCien * 40 +
  billetesCincuenta * 40;

//Guarda en una constante la activación del botón
const btnRetirar = document.querySelector('#retirar');

btnRetirar.addEventListener('click', function () {
  /*Función que recupera el monto ingresado y retorna la cantidad de billetes
al dar click en el botón */

  let montoIngresado = document.getElementById('retiro').value;

  /* Primero, hay que comprobar que hay dinero en el cajero
   */

  if (montoIngresado <= totalCajero) {
    console.log('hay dinero');

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

      let sobra = montoIngresado % 500;
      console.log(`Sobran ${sobra}`);
    } else if (
      (montoIngresado < 500 && montoIngresado >= 200) ||
      (billetesQuinientos <= 0 && billetesDoscientos != 0) ||
      (billetesDoscientos != 0 && sobra > 0)
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

      let sobra = montoIngresado % 200;
      console.log(`Sobran ${sobra}`);
    } else if (
      (montoIngresado < 200 && montoIngresado >= 100) ||
      (billetesDoscientos <= 0 && billetesCien != 0) ||
      (billetesCien != 0 && sobra > 0)
    ) {
      /* Ahora hay que detener el proceso si billetesDoscientos llega a cero */
      console.log('No hay billetes de 200');
    }
  } else {
    console.log('Su operación no pudo ser completada.');
  }
});
