import './login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
    <div className='flex flex-wrap items-center h-screen w-full justify-center'>
      {/* blur-xs hover:blur-none transition duration-300 ------apply when finish styling*/}
      <div className="bg-[rgba(226,45,0,0.7)] text-[rgba(221,208,208)] shadow w-1/5 h-2/3 rounded-2xl font-bold text-center blur-xs hover:blur-none duration-300 hover:bg-amber-600 transition-transform hover:scale-110">
      <h1 className='mt-8 mb-0 pb-0 text-2xl font-mono'>ALREADY REGISTERED? LOGIN TO GET STARTED!</h1>
        <form
          action=""
          className="flex flex-col gap-5 h-full items-center justify-center mt-0 pt-0"
        >
          {/* <h1 className="font-mono text-3xl">Login</h1> */}
          <label htmlFor="Username" className="flex">
            <input
              type="text"
              name="email"
              placeholder="Username"
              className="focus:outline-none focus:bg-[rgba(226,45,0,0.6)]  text-[rgba(221,208,208,0.89)] rounded-md p-2 outline-none focus:ring-1 focus:ring-orange-300"
            />
          </label>
          <label htmlFor="Username" className="flex">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="focus:outline-none focus:bg-[rgba(226,45,0,0.6)]  text-[rgba(221,208,208,0.89)] rounded-md p-2 outline-none focus:ring-1 focus:ring-orange-300"
            />
          </label>
          <Link to={'/chat'}><button type='submit' className="font-bold text-2xl ">
            LogIn
          </button></Link>
          
        </form>
      </div>
      <div className="bg-[rgba(221,208,208,0.89)] p-4 w-2/6 h-2/3 shadow rounded-2xl  text-[rgba(226,45,0,0.6)] font-mono font-bold text-2xl text-center flex flex-col hover:bg-amber-50">
      <h1 className='mt-8 mb-0'>REGISTER NOW AND TRY OUT AI-PSYCOLOGIST!</h1>
        <form
          action=""
          className="flex flex-col gap-5 h-full items-center justify-center mt-0 pt-0"
        >
          <h1 className="font-mono text-4xl pt-0 mt-0">Signup</h1>
          <label htmlFor="Username">
            <input type="text" name="email" placeholder="Username" className='focus:outline-none focus:bg-[rgba(226,45,0,0.6)]  focus:text-[rgba(221,208,208,0.89)] rounded-md p-2 outline-none focus:ring-1 focus:ring-orange-300'/>
          </label>
          <label htmlFor="Username">
            <input type="password" name="password" placeholder="Password" className='focus:outline-none focus:bg-[rgba(226,45,0,0.6)]  focus:text-[rgba(221,208,208,0.89)] rounded-md p-2 outline-none focus:ring-1 focus:ring-orange-300'/>
          </label>
          <button type="submit">SignUp</button>
        </form>
      </div>
      </div>
    </>
  );
}
export default Login;
