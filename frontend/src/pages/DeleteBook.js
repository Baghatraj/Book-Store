import React,{useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from 'axios';
import BackButton from '../components/BackButton.js';
import Spinner from '../components/Spinner.js';

const DeleteBook = () =>{
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()
    const {id} = useParams();

    const handleDeleteBook = () =>{
        setloading(true)
        axios.delete(`http://localhost:5000/books/${id}`)
        .then(()=>{
            setloading(false);
            navigate('/')
        }).catch((error)=>{
            setloading(false);
            alert('An error happened Please check console')
            console.log(error);
        })
    }

    return(
        <div>
            <BackButton />
            <h1>DeleteBook</h1>
            {loading ? <Spinner/> : ''}
            <div style={{display:'flex', flexDirection:'column'}}>
                <h3>Are you sure you want to delete</h3>

                <button onClick={handleDeleteBook}>Yes Delete</button>
            </div>
        </div>
    )
}

export default DeleteBook