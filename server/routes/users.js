const express = require('express')
const bcrypt = require('bcryptjs')
const Joi = require('joi')
const db = require('../database')
const {newUserSchema} = require('../validation/newUser')
const router = express.Router()

// Get all users
router.get('/', (req, res) => {
  db.any('SELECT id, first_name, last_name, email FROM users;')
  .then(users => res.json(users))
  .catch(error => res.status(500).json({
    "success": false,
    "message": error.message
  }))
})

// Add a new user
router.post('/add', (req, res) => {
  const {first_name, last_name, email, password} = req.body

  // Validate
  const {error, value} = newUserSchema.validate(req.body)

  if (error) res.status(400).json(error)

  else {
    const salt = bcrypt.genSaltSync(12)
    const hash = bcrypt.hashSync(password, salt)

    db.none('INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4);', [first_name, last_name, email, hash])
    .then(() => res.json({
      "success": true,
      "message": "User successfully added to the database"
    }))
    .catch(error => res.status(500).json({
      "success": false,
      "message": error.message
    }))
  }
})

module.exports = router
