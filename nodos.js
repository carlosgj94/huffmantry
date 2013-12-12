function Nodo (carac, peso, izq, der) {
	this.carac = carac;
	this.peso = peso;
	this.izq = izq;
	this.der = der;
}

function crear_nodos(lista_frecs){
  var nodos = [];
  for(var i=0;i<lista_frecs.length;i++)
    nodos.push(new Nodo(lista_frecs[i][0], liste_frecs[i][1])); //Dejamos vacio izquierda y derecha
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