document.addEventListener("DOMContentLoaded", () => {
    const carrossel = document.querySelector(".carrossel");
    const imagens = carrossel.querySelectorAll("img");
    let indiceAtual = 0;
  
    function trocarImagem() {

      imagens.forEach((img) => (img.style.display = "none"));

      imagens[indiceAtual].style.display = "block";

      indiceAtual = (indiceAtual + 1) % imagens.length;
    }
  
    
    trocarImagem();
    
    setInterval(trocarImagem, 5000);
  });
  