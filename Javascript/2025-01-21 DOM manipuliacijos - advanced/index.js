

function atidarytiKortele()
{
    const uzdaromaLentele = document.querySelector("#closable-card");
    uzdaromaLentele.classList.remove("hidden");
}

function uzdarytiKortele()
{
    const uzdaromaLentele = document.querySelector("#closable-card");
    uzdaromaLentele.classList.add("hidden");
}

let dabartinisSriftoDydis = 18;
const MAX_SRIFTAS = 30;
const MIN_SRIFTAS = 8;

const h4 = document.querySelector("h4");

// h4.style.fontSize = "40px";

function pamazintiSrifta()
{
    if(dabartinisSriftoDydis > MIN_SRIFTAS){
        dabartinisSriftoDydis--;
        h4.style.fontSize = `${dabartinisSriftoDydis}px`;
    }
}

function padidintiSrifta()
{
    if(dabartinisSriftoDydis < MAX_SRIFTAS){
        dabartinisSriftoDydis++;
        h4.style.fontSize = `${dabartinisSriftoDydis}px`;
    }
}
