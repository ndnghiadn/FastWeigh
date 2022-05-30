import React, { useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { AiFillCaretLeft } from 'react-icons/ai'
import axios from 'axios'

const Edit = ({ fruit, setShow }) => {
  const [amount, setAmount] = useState()

  const handleEdit = async (e) => {
    e.preventDefault()
    if (amount) {
      try {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/fruit/editPrice/${fruit.name}`, { newPrice: amount })
      } catch (error) {
        console.log('Err: ', error)
      }
      setShow(false)
  }
  }


  return (
    <Card style={{ width: '18rem' }}>
        <AiFillCaretLeft style={{cursor: 'pointer'}} onClick={() => setShow(false)}/>
        <Card.Body>
            <Card.Title>{fruit.name}</Card.Title>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>New price:</Form.Label>
                    <Form.Control type="number" onChange={(e) => setAmount(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" onClick={handleEdit}>
                    Edit
                </Button>
            </Form>
        </Card.Body>
    </Card>
  )
}

export default Edit