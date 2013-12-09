function busqueda(texto){
	var array = [];
  
	for(var i=0; i<texto.length; i++){
		var pertenece = letra_incluida(texto[i], array);
		if (pertenece === false){
            array[array.length]=new Array(2);
			array[array.length][0]= texto[i]; //Error
			array[array.length][1]= 1;
		}
		else{
			for (var j=0; j<texto.length; j++){
				if (texto[i]== array[j][0])
					array[j][1]+=1;
			}
		}
	}
	return array;
}

function letra_incluida (letra, array) {
	var incluida = false;
	for (var i=0; i<array.length; i++){
		if (letra == array[i][0])
			incluida = true;
	}
	return incluida;
}

var texto = "ABC";
console.log(busqueda(texto)); 
​