import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

function chatHistory() {
  const [history,setHistory]=useState(["Mental therepy","height Increase","sex therepy"]);
  
    const addHistory = () => {
    setHistory([...history, "mental therapy bebud becub"]);
  };
  console.log(history);
  
  return (
    <div className="flex-row border-r-2 border-[#fff1f121] bg-[#0a0a09]  h-screen rounded-b-xl font-mono">
      {/* <button onClick={addHistory}>hh</button> */}
      <div className="flex justify-center border-b-2 border-amber-600 rounded-2xl">
        <h1>Sessions</h1>
      </div>
      {/* div map after backend */}
      {history.map((session)=>(
        <div
        className="w-64 h-12
            border-2 border-gray-900 
            rounded-xl
            shadow-lg 
            p-4 flex items-center justify-center
            cursor-pointer
            hover:bg-[#f55110a9]"
      >
        <p className="truncate">{session}</p>
        <DeleteIcon color="inherit" fontSize="small" className="text-red-400 ml-auto hover:text-red-500 hover:scale-120 transition duration-500"/>
      </div>
      ))}
      
    </div>
  );
}

export default chatHistory;
