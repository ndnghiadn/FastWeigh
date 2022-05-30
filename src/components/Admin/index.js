import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Header from '../Header'
import Main from './Main'

const Admin = () => {
  const [formData, setFormData] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const admin = {
      username: 'admin',
      password: '1234'
    }
    if (formData.username === admin.username && formData.password === admin.password) {
      toast('🦄 Login SUCCESS!')
      setIsLoggedIn(true)
    } else {
      toast.error('Login FAIL!!!')
    }
  }

  return (
    <>
      <Header />
      <div className="Admin--container">
        {
          isLoggedIn ? (
            <Main />
          ) : (
            <form onSubmit={handleSubmit} class="form">
                <input type="text" name="username" placeholder="Username" onChange={handleInputChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
                <button type="submit" class="btn">Login</button>
            </form>
          )
        }
      </div>
    </>
  )
}

export default Admin