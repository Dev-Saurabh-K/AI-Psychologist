
import { useParams } from "react-router-dom";


function UserDashboard(){
    const {id}=useParams();
    return(
        <h1>dashboard {id}</h1>
    )
}
export default UserDashboard;