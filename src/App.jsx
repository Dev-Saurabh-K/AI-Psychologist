import axios from "axios";
import { useState,useEffect } from "react";
import Input from "./components/Input"
import ChatHistory from "./components/History";
import SessionOut from "./components/sessionOut";


// import Tests from './components/testso';


function App(){
  const [cookie, setcookie] = useState("");
  const [session, setSession]=useState(false);
    useEffect(() => {
      const fetchcookie = async () => {
        const res = await axios.get("http://localhost:3001/profile", {
          withCredentials: true,
        });
        setcookie(res.data.token);
        // console.log(res.data.token);
      };
      fetchcookie();
    }, []);
    useEffect(()=>{
      {cookie?setSession(true):setSession(false)}
    },[cookie])
    
  return(
    <>
    {/* {cookie?<p>{cookie}</p>:<p>no cookie</p>} */}
    {session?<div className="flex items-center justify-center flex-auto h-screen ">
      <ChatHistory/>
      <Input/>
    </div>:<SessionOut/>}
    </>
  )
}

export default App;
