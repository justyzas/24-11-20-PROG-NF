import { useState } from "react"


export default function States()
{
    const [count, setCount] = useState(0);// 12, "tekstas", true, undefined,null, NaN...
    console.log("Komponentas persikrovė")

    function increaseCount()
    {
        setCount(count + 1);
    }

    return <div>
        <p>count is: {count}</p>
        <button onClick={increaseCount}>increase count</button>
        <button onClick={()=>setCount(Math.max(count - 1, 0))}>decrease count</button>
    </div>
}