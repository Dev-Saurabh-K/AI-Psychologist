import { Link } from "react-router-dom";

function NotFoundPage(){
    return(
        <>
        <Link to={"/"}>
        <h1>go back to login page</h1>
        </Link>
        </>
    )
}
export default NotFoundPage;