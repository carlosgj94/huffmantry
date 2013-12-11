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

var texto = "ABCABCaB";
console.log(busqueda(texto)); 
