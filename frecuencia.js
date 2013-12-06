function frecuencia(texto){
        var frecs={};
        for (var i in texto){
                if (texto[i] in frecs){
                        frecs[texto[i]]+=1;
                }
                else{
                        frecs[texto[i]]=1;
                }
        }
        return frecs;
}

