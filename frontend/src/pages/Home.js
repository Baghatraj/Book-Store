import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookTable from "../components/BookTable";
import BookCard from "../components/BookCard";
import style from '../style/home.module.css';

const Home = () => {
    const [books, setBooks] = useState([])
    const [loading, setloading] = useState(false)
    const [type, setType] = useState('card')

    useEffect(() => {
        setloading(true)
        axios.get('http://localhost:5000/books')
            .then((res) => {
                setBooks(res.data.data)
                setloading(false);
            })
            .catch((error) => {
                console.log(error);
                setloading(false)
            })

    }, [])

    return (
        <div>
            <div className={style.type}>
                <button className={style.btn} onClick={() => setType('card')}>
                    Card
                </button>
                <button className={style.btn} onClick={() => setType('table')}>
                    Table
                </button>
            </div>
            <div className={style.title}>
                <h1>Books List</h1>
                <Link to='/books/create'>
                    <button className={style.btn_create}>New Book</button>
                </Link>
            </div>
            {loading ? (<Spinner />) : (type === 'table' ? <BookTable books={books} /> : <BookCard books={books} />)}
        </div>
    )
}

export default Home