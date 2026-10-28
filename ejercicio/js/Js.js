let grados = new Array(7);

function cargar(){
    for (let i = 0; i < 7; i++){
        let valor = prompt("Captura los grados centigrados (Dia " + (i + 1) + ")");
        grados[i] = parseFloat(valor);
        console.log(grados[i]);
    }
}

function mostrar(){
    var su = '';
    document.getElementById("n1").innerHTML = "<h2>Grados, Minimo, Maximo y Promedio</h2>";
    
    for(let j = 0; j < grados.length; j++){
        su += '<div>Dia ' + (j + 1) + ': ' + grados[j] + ' °C</div>';
    } 
    
    let menor = grados[0];
    let mayor = grados[0];
    let suma = 0;

    for (let k = 0; k < grados.length; k++){
        suma = suma + grados[k];
        
        if (grados[k] < menor) {
            menor = grados[k];
        }
        if (grados[k] > mayor) {
            mayor = grados[k];
        }
    }

    let promedio = suma / grados.length;

    su += '<hr>';
    su += '<div><strong>Temperatura Minima: </strong>' + menor + '</div>';
    su += '<div><strong>Temperatura Maxima: </strong>' + mayor + '</div>';
    su += '<div><strong>Promedio: </strong>' + promedio + '</div>';

    document.getElementById("n1").innerHTML += su;
}

function Ocho() {
    let filas = 7;
    let columnas = 5;
    let matriz = new Array(filas);
    
    for (let i = 0; i < filas; i++) {
        matriz[i] = new Array(columnas);
    }

    let htmlMatriz = "<h3>Matriz en Forma de 8</h3>";

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            let Ocho = (
                (i === 0) || 
                (i === 3) || 
                (i === 6) || 
                ((j === 0 || j === columnas - 1) && (i > 0 && i < 3)) || 
                ((j === 0 || j === columnas - 1) && (i > 3 && i < 6))    
            );

            if (Ocho) {
                matriz[i][j] = "S";
                htmlMatriz += '<div style="background-color:#808080; color:#fff; display:inline-block; width:35px; height:35px; text-align:center; line-height:35px; margin:2px; border:1px solid #000;">' + matriz[i][j] + '</div>';
            } else {
                matriz[i][j] = "";
                htmlMatriz += '<div style="display:inline-block; width:35px; height:35px; margin:2px;"></div>';
            }
        }
        htmlMatriz += '<br>';
    }

    document.getElementById("impEjercicio3").innerHTML = htmlMatriz;
}

function Splice() {
    let elementos = new Array(10);

    for (let i = 0; i < 10; i++) {
        elementos[i] = prompt("Captura el elemento " + (i + 1) + " de 10:");
    }

    let resultado = "<h3>Arreglo Original:</h3>";
    for (let indice in elementos) {
        resultado += '<div>Indice: ' + indice + ' Valor: ' + elementos[indice] + '</div>';
    }

    let inicio = parseInt(prompt("¿Desde que indice deseas empezar a cortar?"));
    let cantidad = parseInt(prompt("¿Cuantos elementos deseas eliminar?"));

    elementos.splice(inicio, cantidad);

    resultado += '<hr><h3>resultado: (' + inicio + ', ' + cantidad + '):</h3>';
    for (let indice in elementos) {
        resultado += '<div>Indice: ' + indice + ' Valor: ' + elementos[indice] + '</div>';
    }

    let indiceVaciar = parseInt(prompt("Indica el indice del elemento que deseas dejar como vacio:"));
    
    if (indiceVaciar >= 0 && indiceVaciar < elementos.length) {
        elementos[indiceVaciar] = "";
    }

    resultado += '<hr><h3>Resultado Final (con posicion vacia):</h3>';
    for (let indice in elementos) {
        let val = (elementos[indice] === "") ? "[VACIO]" : elementos[indice];
        resultado += '<div>Indice: ' + indice + ' Valor: ' + val + '</div>';
    }

    document.getElementById("impEjercicio4").innerHTML = resultado;
}

function Agenda() {
    let diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    let horas = ["20:00", "18:00", "19:00", "09:00", "16:00", "11:00", "06:00"];
    let eventos = ["Gym", "15 anos", "Cafeteria", "Compras", "Tareas", "Fortnite", "Trabajo"];
    let descripciones = ["Ire al gym", "esta en la calle escondida", "Mi roomie paga", "Tengo que hacer las compras", "Terminar las tareas pendientes", "Jugar con mateo Fortnite", "Ir a trabajar"];

    let opcion = prompt("Elige un dia (1. Lunes, 2. Martes, 3. Miercoles, 4. Jueves, 5. Viernes, 6. Sabado, 7. Domingo):");
    let index = parseInt(opcion) - 1;

    if (index >= 0 && index < 7) {
        let resultado = '<h3>Informacion del Dia</h3>';
        resultado += '<p><strong>Dia:</strong> ' + diasSemana[index] + '</p>';
        resultado += '<p><strong>Hora:</strong> ' + horas[index] + '</p>';
        resultado += '<p><strong>Evento:</strong> ' + eventos[index] + '</p>';
        resultado += '<p><strong>Descripcion:</strong> ' + descripciones[index] + '</p>';

        document.getElementById("impEjercicio5").innerHTML = resultado;
    } else {
        alert("Opcion no valida");
    }
}