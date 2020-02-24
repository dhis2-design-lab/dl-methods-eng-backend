const bodyParser  = require('body-parser')
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const apiRoutes = require('./express-routers')({express})

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const PORT = process.env.PORT || '3300'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use(helmet())

app.use('/api', apiRoutes)


app.use((error, req, res, next) => {
    console.log(error)

    function serializeError(errorObj){
        const errorJSON = JSON.stringify(errorObj, Object.getOwnPropertyNames(errorObj))

        return JSON.parse(errorJSON)
    }

    const {message} = serializeError(error)

    return res.json({errors: [
        {message}
    ]})
})


app.listen(PORT, () => {
    console.log(`server up at ${PORT}`) 
  
})

console.log(process.env.DB_URI)