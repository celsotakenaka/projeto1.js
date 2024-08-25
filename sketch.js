//codigos comentados >> ProfC8

//Atividade obrigatória, peso 1/10.

//Instruções:1.Duplicar/Mudar nome do projeto 2.Apagar comentários e manter funções 3.Personalisar parametros 4.Sejam criativos 5.Salvar

//obs.: Na próxima unidade criaremos um repositório na plataforma do GitHub, com isso, será possível compartilhar códigos, projetos, expor trabalhos e ideias digitais. Assim, esse projeto será importante nesse processo de compartilhamento.


function setup() {
  // Início da definição da função 'setup'.
  
  createCanvas(600, 400);
  // Cria um canvas (tela) com largura e altura escolhida em pixels.
  
  background("rgb(12,12,12)");
  // Define color >> fundo do canvas.
  }

function draw() { // Início da definição da função 'draw'.
  stroke("#F44336");
  // Define a cor da linha para azul.
  
  fill(0);
  // Define a cor de preenchimento para as formas seguintes como cor escolhida.
  
  if (mouseIsPressed) {// Verifica se o botão do mouse está pressionado.
    
    rect(mouseX, mouseY, 10, 15);
    // Desenha um retângulo com a parte superior esquerda na posição do cursor do mouse, com largura de 10 e altura de 15 || seja criativo com outros Shape>> explore em Referencia.
  }
  
}
