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
    //dibujarNodo(posX, posY, letra);
    recorrer(arbol[0], posX, posY, 0,7);
}

function dibujarNodo(posX, posY, letra) {
    var c = document.getElementById("tutorial");
    var cxt = c.getContext("2d");
    cxt.fillStyle = "rgba(26, 188, 156,0.5)";
    cxt.beginPath();
    cxt.arc(posX, posY, 20, 0, Math.PI * 2, true);
    cxt.closePath();
    cxt.fill();

    var ctx2 = c.getContext("2d");
    cxt.fillStyle = "#333";
    ctx2.font = "bold 20px sans-serif";
    ctx2.fillText(letra, posX - 10, posY + 5);
}
function dibujarLinea(posXI, posYI, posXF, posYF){
    var c = document.getElementById("tutorial");
    var lienzo = c.getContext("2d");
    lienzo.strokeStyle = "#874F37";
    //Inicio de camino
    lienzo.beginPath();
    lienzo.moveTo(posXI,posYI);
    lienzo.lineTo(posXF,posYF);
    //Trazar linea
    lienzo.stroke();
}
function recorrer(arbol, posX, posY, veces){
    if( arbol != null){
        dibujarNodo(posX, posY, arbol.carac );
        veces++;
       var existe = recorrer( arbol.izq, posX-(210/veces), posY+100, veces);
        if (existe != false){
            dibujarLinea(posX, posY, posX-(210/veces), posY+100);   
        }
        recorrer( arbol.der, posX+(210/veces), posY+100, veces);
        if (existe != false){
            dibujarLinea(posX, posY, posX+(210/veces), posY+100);   
        }
        return true;
    }
    return false;
}
/*
      //Segundo
      posX=posX+100;
      cxt.fillStyle ="#1abc9c";
        cxt.beginPath();
        cxt.arc(posX,posY,30,0,Math.PI*2,true);
      	cxt.closePath();
        cxt.fill();
      
      var ctx2 =c.getContext("2d");
      cxt.fillStyle ="#333";
      ctx2.font = "bold 20px sans-serif";
      	ctx2.fillText("B",posX-10,posY+5);

      //Tercero
      posX=posX+100;
       cxt.fillStyle ="#1abc9c";
        cxt.beginPath();
        cxt.arc(posX,posY,30,0,Math.PI*2,true);
      	cxt.closePath();
        cxt.fill();
      
      var ctx2 =c.getContext("2d");
      cxt.fillStyle ="#333";
      ctx2.font = "bold 20px sans-serif";
      	ctx2.fillText("C",posX-10,posY+5);
      
      //Avance en sentido Y
       posY=posY+100;
       posX=posX-50;
       cxt.fillStyle ="#1abc9c";
        cxt.beginPath();
        cxt.arc(posX,posY,30,0,Math.PI*2,true);
      	cxt.closePath();
        cxt.fill();
      
      var ctx2 =c.getContext("2d");
      cxt.fillStyle ="#333";
      ctx2.font = "bold 20px sans-serif";
      	ctx2.fillText("BC",posX-10,posY+5);*/