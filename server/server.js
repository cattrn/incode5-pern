const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))
app.use(cors())

// routes middleware


app.listen(PORT, () => console.log(`Server listening at port ${PORT}`))

