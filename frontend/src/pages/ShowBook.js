import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton.js'
import Spinner from '../components/Spinner.js';
import style from '../style/pages.module.css';


const ShowBook = () => {
    const [book, setBook] = useState({})
    const [loading, setloading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setloading(true);
        axios.get(`http://localhost:5000/books/${id}`)
            .then((res) => {
                setBook(res.data.data);
                setloading(false);
            }).catch((error) => {
                console.log(error);
                setloading(false)
            })
    }, [id])

    return (
        <div>
            <BackButton />
            <h1>
                Show Book
            </h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className={style.flex}>
                    <div className={style.details}>
                        <div>
                            <span>Id: </span>
                            <span>{book._id}</span>
                        </div>
                        <div>
                            <span>Title: </span>
                            <span>{book.title}</span>
                        </div>
                        <div>
                            <span>Author: </span>
                            <span>{book.author}</span>
                        </div>
                        <div>
                            <span>PublishYear: </span>
                            <span>{book.publishYear}</span>
                        </div>
                        <div>
                            <span>CreatedAt : </span>
                            <span>{new Date(book.createdAt).toString()}</span>
                        </div>
                        <div>
                            <span>UpdatedAt : </span>
                            <span>{new Date(book.updatedAt).toString()}</span>
                        </div>
                    </div>
                </div>

            )}
        </div>
    )
}

export default ShowBook