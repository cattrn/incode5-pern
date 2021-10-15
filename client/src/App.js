import {useEffect, useState} from 'react'
import Form from './components/Form'
import { getUsers } from './api'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [response, setResponse] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const {data} = await getUsers()
        if (data) setUsers(data)
      } catch (error) {
        console.log(error.toJSON())
      }
    }

    getData()
  }, [response])

  console.log(users)

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Form setResponse={setResponse} response={response} />
    </div>
  );
}

export default App;
