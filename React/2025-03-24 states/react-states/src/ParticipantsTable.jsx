export default function ParticipantsTable({participants})
{
    // const ageGroups = {
    //  I:  { min: 16, max: 24 },
    //  II:  { min: 25, max: 32 },
    //  III:  { min: 33, max: 43 },
    //  IV:  { min: 44, max: 55 },
    //  V:  { min: 56, max: 70 },
    //  VI:  { min: 71, max: 80 },
    // }
    // Amžiaus grupės: 
    // I -  16-24
    // II - 25-32
    // III- 33-43
    // IV - 44-55
    // V -  56-70
    // VI - >70
    function chooseAgeGroup(age){
        if(age <= 24)return "I";
        else if (age <= 32) return "II";
        else if (age <= 43) return "III";
        else if (age <= 55) return "IV";
        else if (age <= 70) return "V";
        else return "VI";
    }
    return <table className="participants-table">
        <thead>
            <tr>
                <th>Dalyvio numeris</th>
                <th>Vardas pavardė</th>
                <th>Amžiaus grupė</th>
                <th>Telefono numeris</th>
            </tr>
        </thead>
        <tbody>
            {participants.map((participant)=><tr key={participant.participantNumber}>
                <td>{participant.participantNumber}</td>
                <td>{participant.name}</td>
                <td>{chooseAgeGroup(participant.age)}</td>
                <td>{participant.phone}</td>
            </tr>)}
        </tbody>
    </table>
}