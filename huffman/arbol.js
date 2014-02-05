function crearArbol() {
    document.getElementById('canvas').innerHTML = '<canvas style="width:100%; height:100%;  border: 1px solid #27ae60;" id="tutorial" width="1100%" height="800%">Tu navegador no soporta canvas. Actualizalo.</canvas>';
    var c = document.getElementById("tutorial");
    var ctx = c.getContext("2d"); 
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.stroke();
    //Creamos el arbol
    var posX = 550;
    var posY = 50;
    
    var parrafo = $("#texto").val();
    var buscado = busqueda(parrafo);
    var peso = imprimirPesos(buscado);
    var nodos_creados = crear_nodos(buscado);
    var arbol = crear_arbol(nodos_creados);
    letra= (arbol[0].carac);
    var pesoMaximo =  arbol[0].peso;
    recorrer(arbol[0], posX, posY, 0, pesoMaximo);
}

function dibujarNodo(posX, posY, letra) {
    var c = document.getElementById("tutorial");
    var cxt = c.getContext("2d");
    cxt.fillStyle = "rgba(26, 188, 156,0.5)";
    cxt.beginPath();
    cxt.arc(posX, posY, 22, 0, Math.PI*2, true);
    cxt.closePath();
    cxt.fill();

    var ctx2 = c.getContext("2d");
    cxt.fillStyle = "rgba(44, 62, 80,1.0)";
    ctx2.font = "bold 19px sans-serif";
        ctx2.fillText(letra.toFixed(2), posX - 19, posY + 5);
    
}
function dibujarNodoFinal(posX, posY, peso, letra) {
    var c = document.getElementById("tutorial");
    var cxt = c.getContext("2d");
    cxt.fillStyle = "rgba(26, 188, 156,0.5)";
    cxt.beginPath();
    cxt.arc(posX, posY, 20, 0, Math.PI*2, true);
    cxt.closePath();
    cxt.fill();

    var ctx2 = c.getContext("2d");
    cxt.fillStyle = "rgba(44, 62, 80,1.0)";
    ctx2.font = "bold 19px sans-serif";
    ctx2.fillText(peso.toFixed(2), posX - 19, posY + 5);
    
     cxt.fillStyle = "rgba(52, 152, 219,0.5)";
    cxt.beginPath();
    cxt.arc(posX, posY+28, 22, 0, Math.PI*2, true);
    cxt.closePath();
    cxt.fill();
    
    var ctx2 = c.getContext("2d");
    cxt.fillStyle = "rgba(44, 62, 80,1.0)";
    ctx2.font = "bold 20px sans-serif";
    ctx2.fillText(letra, posX -6, posY+33);
    
}
function dibujarLinea(posXI, posYI, posXF, posYF, num){
    var c = document.getElementById("tutorial");
    var lienzo = c.getContext("2d");
    lienzo.strokeStyle = "#874F37";
    //Inicio de camino
    lienzo.beginPath();
    lienzo.moveTo(posXI,posYI);
    lienzo.lineTo(posXF,posYF);
    //Dibujar letra
    var ctx2 = c.getContext("2d");
    ctx2.fillStyle = "rgba(142, 68, 173,0.9)";
    ctx2.font = "bold 12px sans-serif";
    ctx2.fillText(num, ((posXI+posXF)/2)-3, ((posYI+posYF)/2)-15);
    //Trazar linea
    lienzo.stroke();
}
function recorrer(arbol, posX, posY, veces, pesoMaximo){
    if( arbol != null){
        if(arbol.carac.length >1){
            dibujarNodo(posX, posY, arbol.peso/pesoMaximo);
        }
        else
            dibujarNodoFinal(posX, posY, arbol.peso/pesoMaximo, arbol.carac);
        veces++;
       var existe = recorrer( arbol.izq, posX-(210/veces), posY+100, veces, pesoMaximo);
        if (existe != false){
            dibujarLinea(posX, posY, posX-(210/veces), posY+100, 0);   
        }
        recorrer( arbol.der, posX+(210/veces), posY+100, veces, pesoMaximo);
        if (existe != false){
            dibujarLinea(posX, posY, posX+(210/veces), posY+100, 1);   
        }
        return true;
    }
    return false;
}
