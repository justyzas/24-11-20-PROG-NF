// CRUD-
// C - Create -> Sukurti
// R - Read   -> Peržiūrėti
// U - Update -> Atnaujinti
// D - Delete -> Ištrinti


const megstamiFilmai = gautiDuomenisIsLocalStorage();
atnaujintiLentele();


function atnaujintiLentele()
{
    let htmlTekstas = "";
    // for(let i = 0; i < megstamiFilmai.length; i++)
    // {
    //     htmlTekstas += `<tr>
    //                 <td>${megstamiFilmai[i].pavadinimas}</td>
    //                 <td>${megstamiFilmai[i].zanras}</td>
    //                 <td>${megstamiFilmai[i].metai}</td>
    //             </tr>`         
    // }
    
    // for .. of
    // Atiduoda masyvo elementus
    for(const filmas of megstamiFilmai){
        htmlTekstas += `<tr>
                     <td>${filmas.pavadinimas}</td>
                     <td>${filmas.zanras}</td>
                     <td>${filmas.metai}</td>
                </tr>`;
    }

    // for .. in
    // Atiduoda indeksus
    // for(const i in megstamiFilmai)
    // {
    //     htmlTekstas += `<tr>
    //                  <td>${megstamiFilmai[i].pavadinimas}</td>
    //                  <td>${megstamiFilmai[i].zanras}</td>
    //                  <td>${megstamiFilmai[i].metai}</td>
    //              </tr>`  
    // }

    // ciklas - kaip masyvo metodas
    // megstamiFilmai.forEach((filmas)=>{
    //     htmlTekstas += `<tr>
    //         <td>${filmas.pavadinimas}</td>
    //         <td>${filmas.zanras}</td>
    //         <td>${filmas.metai}</td>
    //     </tr>`
    // });

    document.querySelector("#filmai > tbody").innerHTML = htmlTekstas;
}   

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
    atnaujintiLentele();
    atnaujintiLocalStorage();
}

function atnaujintiLocalStorage()
{
    // localStorage - objektas, skirtas dirbti su lokalia naršyklės saugykla
    // localStorage.setItem(pavadinimas, reiksme) - nustato nauja reiksme paskirtam pavadinimui
    // localStorage.getItem(pavadinimas)          - pagal pateiktą pavadinimą, gauna anksčiau išsaugotą tekstinę reikšmę
    
    // JSON.stringify(kintamasis)                 - Paverčia bet kokį paduotą kintamąjį į tekstą JSON formatu.  
    const json = JSON.stringify(megstamiFilmai); 
    localStorage.setItem("megstamiFilmai", json);
}

function gautiDuomenisIsLocalStorage()
{
    const duomenys = localStorage.getItem("megstamiFilmai");
    // JSON.parse(tekstas)              - Paverčia tekstą į validžius JS kintamuosius
    const JSKintamasis = JSON.parse(duomenys);
    if(JSKintamasis===null) return [];
    return JSKintamasis;
}
