import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { AiFillCaretLeft } from 'react-icons/ai'
import axios from 'axios'

const Add = ({ fruit, setShow }) => {

    const [amount, setAmount] = useState()

    const handleAdd = async (e) => {
        e.preventDefault()
        if (amount) {
            try {
                await axios.post(`${process.env.REACT_APP_BACKEND_URL}/fruit/addQuantity/${fruit.name}`, { quantity: amount })
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
            <Card.Text>Onstock: {fruit.remain}</Card.Text>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Type the amount:</Form.Label>
                    <Form.Control type="number" onChange={(e) => setAmount(e.target.value)} />
                </Form.Group>
                <Button variant="primary" onClick={handleAdd}>
                    Add
                </Button>
            </Form>
        </Card.Body>
    </Card>
  )
}

export default Add