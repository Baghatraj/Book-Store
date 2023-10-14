import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({destination = '/'}) =>{
    return(
        <div style={{display:'flex'}}>
            <Link to={destination}>
                <BsArrowLeft/>
            </Link>
        </div>
    )
}

export default BackButton