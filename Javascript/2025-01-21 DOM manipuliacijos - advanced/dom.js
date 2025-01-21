// Elemento pasirinkimas
const elementas = document.querySelector("h3");
// Ir jo manipuliavimas (teksto keitimas)
// elementas.innerText = "<span class=\"heading2\">JavaScript</span> manipuliacijos";
elementas.innerHTML = "<span class=\"heading2\">DOM</span> manipuliacijos";


function pridetiKlase()
{
    const h5 = document.querySelector("#first-heading");
    // 1. BŪDAS  -  Nurodant visas klases naudojantis elementas.className. PERSPĖJIMAS - šis būdas perrašo
    // visas klases, kurios buvo originaliai pridėtos prie elemento

    // h5.className = "heading2";

    // 2 BŪDAS - naudojantis klasių sąrašu. Juo galime lengvai manipuliuoti bei pridėti/pašalinti 
    // elementus pagal dabartinę elemento būseną (ŠIS BŪDAS REKOMENDUOTINAS)

    h5.classList.add("heading2");
}

function nuimtiKlase()
{
    // 1. pasirinkti elementą (id="second-heading")
    const h5 = document.querySelector("#second-heading");
    // 2. nuimti klasę "heading2"
    // h5.className = "";
    h5.classList.remove("heading2");
}

function nuimtiArbaPridetiKlase()
{
    const h5 = document.querySelector("#third-heading");
    // elementas.classList.toggle(klasesPavadinimas)  - nuima arba prideda klasę.
    // Jei elementas turi tokią klasę - ją nuima
    // Jei elementas tokios klasės neturi - ją prideda
    h5.classList.toggle("heading2");
}

function pasalintiElementa(){
    const h5 = document.querySelector("#fourth-heading");

    // const mygtukas = document.querySelector("#mygtukas-sunaikinti");
    const mygtukas = h5.nextElementSibling;             // Gauna sekantį elementą, einantį už h5
    // const kitasMygtukas = h5.previousElementSibling; // Gauna elementą, einantį prieš h5

    // Elementas.remove() - pašalina elementą iš visos HTML struktūros
    h5.remove();
    mygtukas.remove();
    // kitasMygtukas.remove();
}

function kurtiElementaUzElemento()
{
    const h5 = document.querySelector("#fifth-heading");

    //Elemento sukūrimas ir jo turinio priskyrimas
    const p = document.createElement("p"); // p elemento sukūrimas
    p.innerText = "Čia yra nauja pastraipa sukurta JS'e";
    p.classList.add("klase1");
    p.classList.add("klase2");
    p.id = "mano-pastraipa"
    p.title = "Čia yra pastraipa apie mano tekstą"
   
    // document.body.insertBefore(p, h5.nextElementSibling);
    // Įterpimas - kaip sekančio elemento
    // pirmas parametras nusako kur šalia šio elemento arba jame kurti nurodytą elementą p
    // "afterbegin" - už elemento pradžios      <h5><elementas/> tekstas</h5>
    // "afterend" - už elemento pradžios        <h5>tekstas</h5><elementas/>
    // "beforebegin" - už elemento pradžios     <elementas/><h5>tekstas</h5>
    // "beforeend" - už elemento pradžios       <h5>tekstas<elementas/></h5>
    h5.insertAdjacentElement("afterend", p);
}

function kurtiElementaPriesElementa()
{
    const h5 = document.querySelector("#sixth-heading");

    const p = document.createElement("p"); // p elemento sukūrimas
    p.innerText = "Čia yra nauja pastraipa sukurta JS'e";
    p.classList.add("klase1");
    p.classList.add("klase2");
    p.id ="mano-pastraipa";
    p.title= "Čia yra pastraipa apie mano tekstą";

    h5.insertAdjacentElement("beforebegin", p);
}
