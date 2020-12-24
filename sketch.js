var posicaoX, posicaoY;
var tempo;
var c;
var wc;
var hc;
function setup() {
  posicaoX = 0;
  posicaoY = 0;
  tempo = 1;

  c = createCanvas(400, 400);
  wc = (windowWidth - width) / 2;
  hc = (windowHeight - height) / 2;
  c.position(wc, hc);
  frameRate(10);
  background(220);
}

function draw() {
  textAlign(CENTER);
  
  if(tempo % 2 == 0){
   fill(255);
   rect(posicaoX, posicaoY, 50, 50);
   fill(0);
   text("0 - "+tempo,posicaoX + 20, posicaoY + 30);
  }else{    
   fill(0);
   rect(posicaoX, posicaoY, 50, 50);
   fill(255, 255, 255);
   text("1 - "+tempo,posicaoX + 20, posicaoY + 30);

  }
  
  posicaoX += 50;
  
  if(posicaoX > 400 && posicaoY < 400){
     posicaoX = 0;
     posicaoY += 50;
  }
  
   
  
  if(posicaoY == 400){
     posicaoX = 0;
     posicaoY = 0;
     //tempo--;
     //noLoop();
  }  
   
  tempo++;
  
}
