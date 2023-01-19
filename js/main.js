
    let resultado = document.getElementById('resultado')
   const btn = document.getElementById ('btnCalcular');
    const botonRes = document.getElementById ('btn-reset')

let valorKm = 112.5;   
let precio;


    const CalcularViaje=()=> {

        let cantidadKM = document.getElementById('cantidadKM').value

    precio = cantidadKM *valorKm;
    resultado.textContent=`El importe a cobrar es: $${precio}`

}


btn.addEventListener('click',CalcularViaje)
