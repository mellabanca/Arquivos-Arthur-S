//cria as variáveis
var trex, trexCorrendo;

function preload(){
  //Carrega as imagens para a animação do T-rex
  trexCorrendo = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  //Cria a tela do nosso jogo
  createCanvas(1200,400);
  //cria o sprite do T-rex e adiciona a animação
  trex = createSprite(50,160,20,50);
  trex.addAnimation("correndo",trexCorrendo);
  //cria as bordas
  borda = createEdgeSprites();
}

function draw(){
  //pinta o fundo da tela do jogo de branco
  background("white");
  //Faz o trex pular quando aperta a tecla espaço
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  //Sistema degravidade
  trex.velocityY = trex.velocityY + 1;
  //Impede que o T-rex caia da tela
  trex.collide(borda[3]);
  //Desenha todos os sprites
  drawSprites();

}