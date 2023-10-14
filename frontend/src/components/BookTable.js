import React from "react"
import {Link} from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineDelete} from 'react-icons/md'

const BookTable = ({books}) =>{

    return(
        <table border={1}>
        <thead>
            <tr>
                <th>No</th>
                <th>Title</th>
                <th>Author</th>
                <th>PublishYear</th>
            </tr>
        </thead>
        <tbody>
            
            {books.map((book,index)=>{
                return(
                <tr key={book._id}>
                    <td>{index+1}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.publishYear}</td>
                    <td>
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <Link to={`/books/details/${book._id}`}>
                                <BsInfoCircle/>
                            </Link>
                            <Link to={`/books/edit/${book._id}`}>
                                <AiOutlineEdit/>
                            </Link>
                            <Link to={`/books/delete/${book._id}`}>
                                <MdOutlineDelete/>
                            </Link>                  
                        </div>
                    </td>
                </tr>)
            })}
        </tbody>
    </table>
    )
}

export default BookTable