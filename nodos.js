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