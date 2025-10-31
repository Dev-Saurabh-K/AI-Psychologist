import { Link } from "react-router-dom";



function SessionOut(){
    return(
        <div className="flex items-center justify-center w-full h-screen text-6xl ">
            <div className="z-0">Opps!..Session Expired!... </div>
            <Link to={"/login"}>
            <div>login again to continue</div>
            </Link>
        </div>
    )
}
export default SessionOut;