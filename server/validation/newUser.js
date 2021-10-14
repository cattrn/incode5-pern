const Joi = require('joi')

module.exports.newUserSchema = Joi.object({
  first_name: Joi.string().required(), // check out if Joi has a name method
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  confirm_password: Joi.ref('password')
})