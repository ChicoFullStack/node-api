require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Maqs = require('./models/clps')

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.set('strictQuery', false);
const connectDB = async ()=> {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

app.get('/', (req, res)=> {
    res.send({titulo: 'Books'})
});

app.get('/add-note', async (req, res) => {
    try {
        await Maqs.insertMany([
            {
                "TEMPERATURA": "150",
                "date": "24/01/16",
                "INICIO_PROCESS_W": "4",
                "PRODUCAO": "99",
                "MAQ_LIG_DES_B": "1",
                "FIM_PROCESS_B": "0",
                "INICIO_PROCESS_B": "1",
                "id": "1",
                "time": "23:25:21",
                "FIM_PROCESS_W": "3",
                "MAQ_LIG_DES_W": "50"
              },
              {
                "TEMPERATURA": "150",
                "date": "24/01/16",
                "INICIO_PROCESS_W": "4",
                "PRODUCAO": "99",
                "MAQ_LIG_DES_B": "1",
                "FIM_PROCESS_B": "0",
                "INICIO_PROCESS_B": "1",
                "id": "2",
                "time": "23:25:31",
                "FIM_PROCESS_W": "3",
                "MAQ_LIG_DES_W": "50"
              },
        ])
    } catch (error) {
        console.log('err', + error)
    }
})

app.get('/books', async (req, res) => {
    const book = await Maqs.find();

    if (book) {
        res.json(book)
    }else {
        res.send("Something went wrong.")
    }
})


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
})