function busqueda(texto){
	var array = [];
  
	for(var i=0; i<texto.length; i++){
		var pertenece = letra_incluida(texto[i], array);
		if (pertenece === false){
          		var long = array.length;
           		array[long]=new Array(2);
			array[long][0]= texto[i];
			array[long][1]= 1;
		}
		else{
			for (var j=0; j<array.length; j++){
				if (texto[i].toLowerCase()==array[j][0].toLowerCase() || texto[i].toLowerCase()==array[j][0] || texto[i]==array[j][0].toLowerCase() || texto[i] == array[j][0]){
					array[j][1]+=1;
                    			j=array.length;
				}
			}
		}
	}
	return array;
}

function letra_incluida (letra, array) {
	var incluida = false;
	for (var i=0; i<array.length; i++){
		if (letra.toLowerCase()==array[i][0].toLowerCase() || letra.toLowerCase()==array[i][0] || letra==array[i][0].toLowerCase() || letra == array[i][0]){
			incluida = true;
			i=array.length;
		}
	}
	return incluida;
}

function Nodo (carac, peso, izq, der) {
	this.carac = carac;
	this.peso = peso;
	this.izq = izq;
	this.der = der;
}

function crear_nodos(lista_frecs){
  var nodos = [];
  for(var i=0;i<lista_frecs.length;i++)
    nodos.push(new Nodo(lista_frecs[i][0], lista_frecs[i][1])); //Dejamos vacio izquierda y derecha
  return nodos;
}

function crear_hoja (nodIzq, nodDer) {//Esta funcion sera llamada por crear_arbol(){}
        return (new Nodo(nodDer.carac + nodIzq.carac, nodDer.peso + nodIzq.peso, nodDer, nodIzq) );
}

function crear_arbol (nodos) {
	if (nodos.length == 1)
		return nodos;
	else{
		nodos.push(crear_hoja(nodos.pop(), nodos.pop() ) );
		nodos.sort(function ( a, b){
			return b.peso-a.peso;
		});
		crear_arbol(nodos);
	}
	return nodos;
}

function codificar(arbol, texto){
	var binario = '';
	for (var i in texto){
		binario = binario.concat(buscar_letra(arbol, texto[i]));
	}
	return binario;
}

function buscar_letra(arbol, letra){
	arbol = arbol[0];
	var binario='';
	while(arbol.izq && arbol.der){
		if((arbol.der.carac).indexOf(letra)!=-1){
	    	binario= binario+"1";
	    	arbol = arbol.der;
	    }

		else if((arbol.izq.carac).indexOf(letra)!=-1){
    		binario=binario+"0";
    		arbol = arbol.izq;
    	}
	}
	return binario;
}

var parrafo = "Ata la jaca a la vaca Paca";
console.log(parrafo);
var buscado = busqueda(parrafo);
//console.log(buscado);
var nodos_creados = crear_nodos(buscado);
//console.log(nodos_creados);
var arbol = crear_arbol(nodos_creados);
console.log("La codificacion es: ");
//console.log(arbol[0].der.carac);
var codificado = codificar(arbol, parrafo);
console.log(codificado);
