const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())

app.use(require('./routes/category.route'))
app.use(require('./routes/client.route'))
app.use(require('./routes/drug.route'))

mongoose.connect('mongodb+srv://user:db@cluster0.shtg4u8.mongodb.net/pharmacy-website')

.then(()=> {
    console.log('Успешно подкючено к Mongodb')
    app.listen(3000, () => {
    console.log('Server has been started!')
})
})
.catch((e)=> {
    console.log(e)
})
