'use strict'

const express = require('express');//获得express package
const app = express();//初始化express
const port = 3000;

const generateRandomId = require('uuid/v4');

//adding middelware(要在route之前写)
app.use(express.json())

const books = [
    {
        id: '1234567',
        title: 'Shoe Dog',
        author: 'Phil Knight'
    },
    {
        id: '2345678',
        title: '4-Hour Work Week',
        author: 'Tim Ferris'
    },
    {
        id: '3456789',
        title: 'The Alchemist',
        author: 'Paulo Coelho'

    }
]

// endpoint:/(localhost), 
// GET-read
app.get('/', (req, res) => {
    //   res.send('Hello World');
    res
        .status(200)//设置HTTP状态代码
        .json(books)//传送JSON相应
        .end()

})

//POST-create
app.post('/', (req, res) => {
    const newBook = req.body;//用newBook新变量装获得的request里面写的内容body
    newBook.id = generateRandomId();//重新填入id， 用function
    console.log(newBook);
    books.push(newBook);
    res
        .status(201) //成功发送的话？？？？？？？
        .json(books)
        .end();
})


// PUT - update
app.put('/:id', (req, res) => {
    const requestedBookId = req.params.id;
    const foundBook = books.find(book => book.id == requestedBookID)//.some()功能类似find，返回true/false

    if (foundBook) {
        books.forEach(book => {
            if (book.id == requestedBookId) {
                book.title = req.body.title;
                book.author = req.body.author;
            }
        })
        res.status(301).end('Book changed')
    } else {
        res.status(404).end(`Didn't find the book`)
    }
})


// DELETE
app.delete('/:id', (req, res)=>{
    const requestedBookId = req.params.id;
    console.log(requestedBookID);
    const foundBook = books.find(book => book.id == requestedBookID);
    
    if (foundBook) {
        const index = books.forEach((book, index) => {
            if(book.id == requestedBookId){
                return index;
            }
        })
        books.splice(index, 1);
        res
        .status(200)
        .json(books)
        .end();

    }else{
        res
        .status(400)
        .end(`Book doesn't exist`)
    }

} )


app.listen(port, () => console.log(`listening to port: ${port}`));

