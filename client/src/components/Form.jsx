import { useState } from "react"
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik"
import { addUser } from "../api"

const Form = ({setResponse, response}) => {
  const [message, setMessage] = useState("")

  return (
    <>
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          confirm_password: "",
        }}
        // validation
        onSubmit={async values => {
          try {
            const { data } = await addUser(values)
            if (data) {
              setMessage("User successfully added.")
              setResponse(!response)
            }
          } catch (error) {
            console.log(error.toJSON())
            setMessage(error.message)
          }
        }}
      >
        {({ isSubmitting }) => (
          <FormikForm>
            <Field type="text" name="first_name" placeholder="First Name" />
            <ErrorMessage name="first_name" component="div" />

            <Field type="text" name="last_name" placeholder="Last Name" />
            <ErrorMessage name="last_name" component="div" />

            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />

            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" />

            <Field type="password" name="confirm_password" placeholder="Confirm Password" />
            <ErrorMessage name="confirm_password" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </FormikForm>
        )}
      </Formik>
      <p>{message}</p>
    </>
  )
}

export default Form
