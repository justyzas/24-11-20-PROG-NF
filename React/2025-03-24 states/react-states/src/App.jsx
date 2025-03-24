import { useState } from "react"
import States from "./States"
import ParticipantsTable from "./ParticipantsTable";

let currentParticipantNumber = 101;
function App() {
    const [participants, setParticipants] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");
  // Kursime formą dalyvių registracijai. Forma turės šiuos laukelius:
  // - Vardas Pavardė,
  // - Amžius,
  // - Telefono nr.

  // + Registracijos nr.

  console.log(participants);

  function addParticipant()
  {
    const newParticipant = {
      name,
      age: Number(age),
      phone,
      participantNumber: currentParticipantNumber
    };
    //TODO: Įtraukti amžiaus patikrinimą (jei mažiau nei 16m. arba daugiau nei 80m., į sąrašą neįtraukti)
    currentParticipantNumber++;
    // .push neveiks - kadangi jis neperkraus komponento, ko pasekoje vaizdas neatsinaujins
    setParticipants([...participants, newParticipant]);
    setName("");
    setAge("");
    setPhone("");

  }
  return <main>
    {/* <States/> */}


    <form>
      <div>
        <p>name: {name}</p>
        <p>age: {age}</p>
        <p>phone: {phone}</p>
      </div>
      <div>
        <input 
        type="text" 
        name="participant-name" 
        placeholder="Vardas, pavardė"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
      </div>
      <div>
        <input 
        type="number" 
        name="participant-age" 
        placeholder="Amžius"
        value={age}
        onChange={(e)=>setAge(e.target.value)}
        />
      </div>
      <div>
        <input 
        type="tel" 
        name="participant-phone" 
        placeholder="Telefono numeris" 
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        />
      </div>
      
      <button type="button" onClick={addParticipant}>Įtraukti į sąrašą</button>
    </form>
    <ParticipantsTable participants={participants} />
  </main>
}

export default App
