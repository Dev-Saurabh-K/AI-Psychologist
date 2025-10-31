import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

axios.defaults.withCredentials = true;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        { username, password },
        { withCredentials: true }
      );
      // console.log(res.data.password)
      setMessage(res.data.message);
      console.log("Response:", res.data);
      
      
      navigate("/chat");
      
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <div className="flex flex-wrap shrink-0 items-center h-screen w-full justify-center bg-linear-to-r from-[#000000ea] to-[#00000000]">
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
      </div>
    </>
  );
}
export default Login;
