const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()


mongoose.connect('mongodb://localhost:27017/taskbook')
    .then(() => {
        console.log('connected to mongodb');
    }).catch(() => {
        console.error('Error to connecting mongodb');
    })

const dataSchema = new mongoose.Schema({
    heading: String,
    text: String,
    field: String
})

const Book = mongoose.model('Book', dataSchema);
const port = 3001;

app.use(cors())

app.get('/books', async (req, res) => {
    try {
        const booksDetail = await Book.find();
        res.json(booksDetail)
    } catch (error) {
        return res.status(404).json({ message: 'Server error', error: error.message })
    }
})

app.get('/search', async (req, res) => {
    try {
        const bookField = await Book.distinct('field');
        if (bookField.length === 0) {
            return res.status(404).json({ message: 'book not found ' })
        }
        res.status(200).json(bookField)
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
})

app.get('/search/:id', async (req, res) => {
    try {
        const bookname = req.params.id;
        const book = await Book.find({field : bookname})

        if (!book || book.length === 0) {
            return res.status(404).json({message: "book not found"})
        }
        
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
})
app.listen(port, () => {
    console.log(`Example port listening on port ${port}`);
})
