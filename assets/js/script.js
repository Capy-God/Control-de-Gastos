let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionesGastos = [];

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    listaDescripcionesGastos.push(descripcionGasto);
    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);

    if (valorGasto > 150) {
        alert("¡Advertencia! Se ha registrado un gasto mayor a 150 USD.");
    }

    console.log(listaNombresGastos);
    console.log(listaValoresGastos);
    actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');

    let htmlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);

        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} - Descripción ${listaDescripcionesGastos[posicion]}
                    <button onclick="editarGasto(${posicion});">Editar</button>
                    <button onclick="eliminarGasto(${posicion});">Eliminar</button>
                    </li>`;
        totalGastos += Number(valorGasto);

    });
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function editarGasto(indice) {
    const cajitaNombreGasto = document.getElementById('nombreGasto');
    const cajitaDescripcionGasto = document.getElementById('descripcionGasto');
    const cajitaValorGasto = document.getElementById('valorGasto');
    cajitaNombreGasto.value = listaNombresGastos[indice];
    cajitaDescripcionGasto.value = listaDescripcionesGastos[indice];
    cajitaValorGasto.value = listaValoresGastos[indice];

}

function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('descripcionGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

function eliminarGasto(posicion) {

    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    listaDescripcionesGastos.splice(posicion, 1);
    actualizarListaGastos();
}
