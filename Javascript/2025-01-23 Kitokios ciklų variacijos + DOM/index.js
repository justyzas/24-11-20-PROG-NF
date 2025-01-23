// CRUD-
// C - Create -> Sukurti
// R - Read   -> Peržiūrėti
// U - Update -> Atnaujinti
// D - Delete -> Ištrinti


const megstamiFilmai = [];



function pridetiFilma()
{
    const pavadinimoIvestis = document.querySelector("#filmo-pavadinimas");
    const zanroIvestis = document.querySelector("#zanras");
    const metuIvestis = document.querySelector("#isleidimo-metai");
    
    let pavadinimas = pavadinimoIvestis.value;
    let zanras = zanroIvestis.value;
    let metai = metuIvestis.value.slice(0, 4);//Metų gavimas paimant tik pirmuosius 4 simb.

    const filmoObj = {
        pavadinimas: pavadinimas,
        zanras: zanras,
        metai: +metai
    };


    megstamiFilmai.push(filmoObj);

    console.log(filmoObj);


}