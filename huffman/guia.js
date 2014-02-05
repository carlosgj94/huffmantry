function guiaCanvasI(){
 
    document.getElementById('canvas').innerHTML = '<canvas style="width:60%; height:60%;  border: 1px solid #27ae60;" id="tutorial" width="auto" height="auto">Tu navegador no soporta canvas. Actualizalo.</canvas>';
    var c = document.getElementById("tutorial");
    var ctx = c.getContext("2d"); 
    
    background();
    personaHuffman();
    
    
}


function background() {
    var c = document.getElementById('tutorial')
    var ctx= c.getContext('2d');
    var img = new Image();
    img.src = 'images/game-background.jpg';
    img.onload = function(){
      ctx.drawImage(img, 0, 0, c.width, c.height);
      ctx.stroke();
    }
  }

function personaHuffman(){
    
    
}