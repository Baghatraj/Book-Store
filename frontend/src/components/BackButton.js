import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({destination = '/'}) =>{
    return(
        <div style={{display:'flex'}}>
            <Link to={destination}>
                <BsArrowLeft style={{height:"50px", width:"50px"}}/>
            </Link>
        </div>
    )
}

export default BackButton