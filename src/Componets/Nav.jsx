import '../Styles/Nav.css'
import { Link } from 'react-router-dom'





export const Nav=()=>{



    return(

        <div className="nav">
            <Link to={"/cat"}>Cat API</Link>
            <Link to={"age"}>Generate Age API</Link>
        </div>
    )


}