import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import axios from 'axios';
import BackButton from '../components/BackButton.js';
import Spinner from '../components/Spinner.js';
import style from '../style/pages.module.css';
import { client } from "../client";


const DeleteBook = () => {
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams();

    const handleDeleteBook = (e) => {
        if (e.target.value === "yes") {
            setloading(true)
            client.delete(`/books/${id}`)
                .then(() => {
                    setloading(false);
                    navigate('/')
                }).catch((error) => {
                    setloading(false);
                    alert('An error happened Please check console')
                    console.log(error);
                })

        } else {
            navigate('/')
        }

    }

    return (
        <div>
            <BackButton />
            <h1>DeleteBook</h1>
            {loading ? <Spinner /> :
                (<div className={style.flex}>
                    <div className={style.delform}>
                        <h3>Are you sure you want to delete?</h3>
                        <div className={style.btndel}>
                            <button onClick={handleDeleteBook} value={"yes"} className={style.yes}>Yes</button>
                            <button onClick={handleDeleteBook} value={"no"} className={style.no}>No</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default DeleteBook