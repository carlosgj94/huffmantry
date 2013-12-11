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

var parrafo = "ABCACAabcab";
var buscado = busqueda(parrafo);
console.log(buscado);
var nodos_creados = crear_nodos(buscado);
console.log(nodos_creados);