import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://ai-psychologist-server.onrender.com/login", {
        username,
        password,
      });
      // console.log(res.data.password)
      setMessage(res.data.message);
      console.log("Response:", res.data);
      navigate("/chat");
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  const handleSignupSubmit=async(e)=>{
    e.preventDefault();
    // console.log(username,password)
    try {
      const res = await axios.post("https://ai-psychologist-server.onrender.com/signup", {
        username,
        password,
      });
      // console.log(res.data.password)
      setMessage(res.data.message);
      console.log("Response:", res.data);
      navigate("/");
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  }
  return (
    <>
      <div className="flex flex-wrap shrink-0 items-center h-screen w-full justify-center ">
        {/* blur-xs hover:blur-none transition duration-300 ------apply when finish styling*/}
        <div className="bg-[rgba(226,45,0,0.7)] text-[rgba(221,208,208)] shadow w-1/5 min-w-96 h-2/3 rounded-2xl font-bold text-center duration-300 hover:bg-amber-600 transition-transform  ">
          <h1 className="mt-8 mb-0 pb-0 text-2xl font-mono">
            ALREADY REGISTERED? LOGIN TO GET STARTED!
          </h1>
          <form
            action=""
            className="flex flex-col gap-5 h-full items-center justify-center mt-0 pt-0"
            onSubmit={handleLoginSubmit}
          >
            {/* <h1 className="font-mono text-3xl">Login</h1> */}
            <label htmlFor="Username" className="flex">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="focus:outline-none focus:bg-[rgba(226,45,0,0.6)]  text-[rgba(221,208,208,0.89)] rounded-md p-2 outline-none focus:ring-1 focus:ring-orange-300"
              />
            </label>
            <label htmlFor="Username" className="flex">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="focus:outline-none focus:bg-[rgba(226,45,0,0.6)]  text-[rgba(221,208,208,0.89)] rounded-md p-2 outline-none focus:ring-1 focus:ring-orange-300"
              />
            </label>

            {/* remove or comment out Link tag to text user data database logs, post response */}
            {/* <Link to={"/chat"}> */}
            <button type="submit" className="font-bold text-2xl ">
              LogIn
            </button>
            {/* </Link> */}
          </form>
        </div>
        <div className="bg-[rgba(221,208,208,0.89)] p-4 w-2/6 min-w-96 h-2/3 shadow rounded-2xl  text-[rgba(226,45,0,0.6)] font-mono font-bold text-2xl text-center flex flex-col hover:bg-amber-50">
          <h1 className="mt-8 mb-0">
            REGISTER NOW AND TRY OUT AI-PSYCOLOGIST!
          </h1>
          <form
            action=""
            className="flex flex-col gap-5 h-full items-center justify-center mt-0 pt-0"
            onSubmit={handleSignupSubmit}
          >
            <h1 className="font-mono text-4xl pt-0 mt-0">Signup</h1>
            <label htmlFor="Username">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="focus:outline-none focus:bg-[rgba(226,45,0,0.6)]  focus:text-[rgba(221,208,208,0.89)] rounded-md p-2 outline-none focus:ring-1 focus:ring-orange-300"
              />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Password"
                className="focus:outline-none focus:bg-[rgba(226,45,0,0.6)]  focus:text-[rgba(221,208,208,0.89)] rounded-md p-2 outline-none focus:ring-1 focus:ring-orange-300"
              />
            </label>
            <button type="submit">SignUp</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
