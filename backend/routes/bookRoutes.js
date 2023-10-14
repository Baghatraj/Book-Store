import express from "express";
import { Book } from "../model/bookModel.js";

const router = express.Router();



// Route for save book

router.post('/', async(req,res)=>{
    try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
        return res.status(400).send({
            message : "Send all required fields : title ,author, publishYear"
            })
        }
        const newBook = {
            title : req.body.title,
            author : req.body.author,
            publishYear : req.body.publishYear,
        }
        const book = await Book.create(newBook)

        return res.status(201).send(book);
    }     
     catch (error) {
        console.log(error.message);
        res.status(500);        
    }
})

router.get('/',async(req,res)=>{
    try {
        const book = await Book.find({})

        res.status(200).json({
            count : book.length,
            data : book
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({message: error.message})
    }
})

router.get('/:id',async(req,res)=>{
    try {

        const {id} = req.params

        const book = await Book.findById(id)

        res.status(200).json({
            count : book.length,
            data : book
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({message: error.message})
    }
})

//Route for update
router.put("/:id", async (req,res)=>{
    try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).send({
                message : "Send all required fields : title ,author, publishYear"
                })
        }
        const {id} = req.params

        const result = await Book.findByIdAndUpdate(id, req.body);
        const book = await Book.find({})

        if(!result){
            return res.status(404).send({message : "Book not Found"});
        }

        return res.status(200).send({message : 'Book Updated successfully', data : book})

    } catch (error) {
        console.log(error);
        res.status(500).send({message: error.message})
    }
})

// route for delete
router.delete('/:id', async(req,res)=>{
    try {
        
        const {id} = req.params

        const result = await Book.findByIdAndDelete(id);

        if(!result){
            return res.status(404).send({message : "Book not Found"});
        }

        return res.status(200).send({message : 'Book Deleted successfully'})


    } catch (error) {
        console.log(error);
        res.status(500).send({message: error.message})
    }
})

export default router