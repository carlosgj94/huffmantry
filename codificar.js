var binario= "";
function codificar(arbol, texto){
	
	for (var i in texto){
		binario = binario.concat(buscar_letra(arbol, texto[i]));
	}
	return binario;
}

function buscar_letra(arbol, letra){
	arbol = arbol[0];
	if(arbol.der && arbol.izq){
		if(arbol.der.carac != letra || arbol.izq.carac != letra){
			var arbol_der_carac=arbol.der.carac;
			if(arbol_der_carac.indexOf(letra)!=-1){
				binario=binario.concat("1"+buscar_letra(arbol.der));
			}
			else{
				binario=binario.concat("0"+buscar_letra(arbol.izq));
			}
		}
	}
	else if (arbol.carac === letra){
		binario= binario+"1";
	}
	else if(arbol.carac===letra){
		binario= binario+"0";
	}
	
	
	console.log(binario);
	return binario;
}
