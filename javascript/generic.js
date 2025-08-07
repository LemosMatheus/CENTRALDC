const perso = JSON.parse(localStorage.getItem('personagem'))

let nome = localStorage.getItem("armazem")
document.getElementById("titulo").innerText = `Oi, ${nome}`


document.getElementById('ficha').innerText = perso.nome;

document.getElementById('descrição').innerText = perso.breve_descricao;

document.getElementById('hab1').innerText = perso.habilidade_1;

document.getElementById('hab2').innerText = perso.habilidade_2;

document.getElementById('hab3').innerText = perso.habilidade_3;

document.getElementById('name').innerText = perso.nome_real;

document.getElementById('aparição').innerText = perso.primeira_aparicao;

document.getElementById('afiliações').innerText = perso.afiliacoes;

document.getElementById('Arqui-Inimigos').innerText = perso.arqui_inimigo

document.querySelector('img').src = perso.imagem