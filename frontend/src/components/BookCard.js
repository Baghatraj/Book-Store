import React from "react"
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import '../style/bookcard.css'

const BookCard = ({ books }) => {
    return (
        <div className="flex">
            {books.map((item) => {
                return (
                    <div key={item._id} className="box">
                        <div className="year">{item.publishYear}</div>
                        <div className="title"><PiBookOpenTextLight />{item.title}</div>
                        <div className="author"><BiUserCircle />{item.author}</div>
                        <div className="icons">
                            <Link to={`/books/details/${item._id}`}>
                                <BsInfoCircle />
                            </Link>
                            <Link to={`/books/edit/${item._id}`}>
                                <AiOutlineEdit />
                            </Link>
                            <Link to={`/books/delete/${item._id}`}>
                                <MdOutlineDelete />
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BookCard;