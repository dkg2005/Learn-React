import {useState} from "react";

export default function ToggleBtn(){
    const [isOn, setIsOn] = useState(true);
    return (
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'ON' : 'OFF'}
      </button>
    )
  }