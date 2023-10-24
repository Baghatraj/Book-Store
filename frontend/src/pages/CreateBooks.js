import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import style from '../style/pages.module.css'

const CreateBooks = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [publishYear, setPublishYear] = useState('')
    const [loading, setloading] = useState('')
    const navigate = useNavigate()
    const handleSaveBook = () => {
        const data = {
            title,
            author,
            publishYear
        };
        axios.post('http://localhost:5000/books', data)
            .then(() => {
                setloading(false);
                navigate('/')
            })
            .catch((error) => {
                console.log(error);
                setloading(false)
                alert('an error has happenend pelase check console')
            })
    }

    return (
        <div>
            <BackButton />
            <h1>Create Books</h1>
            {loading ? <Spinner /> : ''}
            <div className={style.flex}>
                <div className={style.form}>
                    <div className={style.title}>
                        <label>Title</label><br/>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className={style.author}>
                        <label>Author</label><br/>
                        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
                    </div>
                    <div className={style.year}>
                        <label>Publish Year</label><br/>
                        <input type="number" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} />
                    </div>
                    <div className={style.btn}>
                        <button onClick={handleSaveBook} className={style.save} >Save</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CreateBooks