import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { AiFillCaretLeft } from 'react-icons/ai'
import axios from 'axios'

const Del = ({ fruit, setShow }) => {

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/fruit/delete/${fruit.name}`)
    } catch (error) {
      console.log('Err: ', error)
    }
    setShow(false)
  }

  return (
    <Card style={{ width: '18rem' }}>
        <AiFillCaretLeft style={{cursor: 'pointer'}} onClick={() => setShow(false)}/>
        <Card.Body>
            <Card.Title>{fruit.name}</Card.Title>
            <Button variant="danger" onClick={handleClick}>Out-stock</Button>
        </Card.Body>
    </Card>
  )
}

export default Del