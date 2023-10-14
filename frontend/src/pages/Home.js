import React, {useEffect, useState} from "react";
import Spinner from "../components/Spinner";
import axios from 'axios';
import {Link} from 'react-router-dom';
import {MdOutlineAddBox} from 'react-icons/md'
import BookTable from "../components/BookTable";
import BookCard from "../components/BookCard";

const Home = () =>{
    const [books, setBooks] = useState([])
    const [loading, setloading] = useState(false)
    const [type, setType] = useState('table')

    useEffect(()=>{
        setloading(true)
        axios.get('http://localhost:5000/books')
        .then((res)=>{
            setBooks(res.data.data)
            setloading(false);
        })
        .catch((error)=>{
            console.log(error);
            setloading(false)
        })

    },[])

    return(
        <div>
            <button onClick={()=> setType('table')}>
                Table
            </button>
            <button onClick={()=> setType('card')}>
                Card
            </button>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <h1>Books List</h1>
                <Link to='/books/create'>
                    <MdOutlineAddBox />
                </Link>
            </div>
            {loading ? (<Spinner />):( type=== 'table' ? <BookTable books={books}/> : <BookCard/>)}
        </div>
    )
}

export default Home