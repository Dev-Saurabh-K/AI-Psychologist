import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useState } from "react";

const url = import.meta.env.VITE_API_URL;
// console.log(url);

function chatHistory() {
  const [history, setHistory] = useState([
    "Mental therepy",
    "height Increase",
    "sex therepy",
  ]);

  const addHistory = () => {
    setHistory([...history, "mental therapy bebud becub"]);
  };

  //gvggguih
  const removeHistory = async (value) => {
    try {
      const res = await axios.post(`${url}/session/remove`, {
        session: value,
      });
    } catch {}
    // setHistory(history.filter((item)=>item!==value));  fornt end logic for deletion
    console.log(value);
  };

  console.log(history);

  return (
    <div className="flex-row border-r-2 border-[#fff1f121] bg-[#0a0a09]  h-screen rounded-b-xl font-mono hidden md:block">
      {/* <button onClick={addHistory}>hh</button> */}
      <div className="flex justify-center border-b-2 border-amber-600 rounded-2xl">
        <h1>Sessions</h1>
      </div>
      {/* div map after backend */}
      {history.map((session) => (
        <div
          className="w-64 h-12
            border-2 border-gray-900 
            rounded-xl
            shadow-lg 
            p-4 flex items-center justify-center
            cursor-pointer
            hover:bg-[#f55110a9]"
          key={session}
        >
          <p className="truncate">{session}</p>
          <div
            onClick={() => removeHistory(session)}
            className="text-red-400 ml-auto hover:text-red-500 hover:scale-120 transition duration-500"
          >
            <DeleteIcon color="inherit" fontSize="small" />
          </div>
        </div>
      ))}
      <div 
      className="flex justify-center items-center bg-orange-700 h-12 hover:bg-orange-100 hover:text-orange-700 cursor-pointer"
      onClick={()=>addHistory()}
      >
        Start New Chat
      </div>
    </div>
  );
}

export default chatHistory;
