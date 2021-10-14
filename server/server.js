const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const usersRoutes = require('./routes/users')

const app = express()
const PORT = process.env.PORT || 5000

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))
app.use(cors())

// routes middleware
app.use('/api/v1/users', usersRoutes)

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`))

