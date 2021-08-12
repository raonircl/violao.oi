'use strict';

const sons = {
    "6": "corda6.ogg",
    "5": "corda5.ogg",
    "4": "corda4.ogg",
    "3": "corda3.ogg",
    "2": "corda2.ogg",
    "1": "corda1.ogg"
} 

const criarDiv = (texto) => {
    const div = document.createElement("div");
    div.classList.add("key");
    div.textContent = texto;
    div.id = texto;
    document.getElementById("container").appendChild(div);
}

const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

const tocarSom = (letra) => {
    const audio = new Audio(`./notas/${sons[letra]}`);
    audio.play();
}

const adicionarEfeito = (letra) => document.getElementById(letra).classList.add("active");

const removerEfeito = (letra) => {
    const div = document.getElementById(letra);
    const removeActive = () => div.classList.remove("active");
    div.addEventListener("transitionend" , removeActive);
}

const ativarDiv = (evento) => {
    const letra = evento.type == 'click' ? evento.target.id : evento.key.toUpperCase();
    const letraPermitida = sons.hasOwnProperty(letra);
    if (letraPermitida) {
        adicionarEfeito(letra);
        tocarSom(letra);
        removerEfeito(letra);
    }
    
} 

exibir(sons);
document.getElementById("container").addEventListener("click", ativarDiv);
window.addEventListener("keyup", ativarDiv)