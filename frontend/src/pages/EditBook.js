import React, {useEffect, useState} from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () =>{

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [publishYear, setPublishYear] = useState('')
    const [loading, setloading] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()
    
    useEffect(()=>{
        setloading(true)
        axios.get(`http://localhost:5000/books/${id}`)
        .then((res)=>{
            setAuthor(res.data.data.author)
            setPublishYear(res.data.data.publishYear)
            setTitle(res.data.data.title)
            setloading(false)
        }).catch((error)=>{
            setloading(false)
            alert('An error has happenend please check console')
            console.log(error);
        })
    }, [id])
    
    const handleEditBook = () =>{
        const data = {
            title,
            author,
            publishYear
        };
        setloading(true)
        axios.put(`http://localhost:5000/books/${id}`,data)
        .then(()=>{
            setloading(false);
            navigate('/')
        })
        .catch((error)=>{
            console.log(error);
            setloading(false)
            alert('an error has happenend pelase check console')
        })
    }

    return(
        <div>
            <BackButton/>
            <h1>Create Books</h1>
            {loading ? <Spinner/> : '' }
            <div style={{display:'flex', flexDirection:'column'}}>
                <div>
                    <label>Title</label>
                    <input type="text" value = {title} onChange={(e)=> setTitle(e.target.value)}/>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'column'}}>
                <div>
                    <label>Author</label>
                    <input type="text" value = {author} onChange={(e)=> setAuthor(e.target.value)}/>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'column'}}>
                <div>
                    <label>Publish Year</label>
                    <input type="number" value = {publishYear} onChange={(e)=> setPublishYear(e.target.value)}/>
                </div>
            </div>
            <button onClick={handleEditBook} >Save</button>
        </div>
    )
}

export default EditBook