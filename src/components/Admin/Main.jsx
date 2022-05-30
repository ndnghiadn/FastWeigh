import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Accordion, Button } from 'react-bootstrap'
import Add from './Add'
import Del from './Del'
import Edit from './Edit'

const Main = () => {
    const [fruits, setFruits] = useState([])
    const [showAdd, setShowAdd] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [showDel, setShowDel] = useState(false)
    const [fruit, setFruit] = useState()

    useEffect(() => {
        (async () => {
        try {
            const rs = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/fruit/getAll`)
            setFruits(rs.data.response)
        } catch (error) {
            console.log('Err: ', error)
        }
        })()
    }, [showAdd, showEdit, showDel])

    const handleAddClick = (fruit) => {
        setFruit(fruit)
        setShowAdd(true)
    }
    const handleEditClick = (fruit) => {
        setFruit(fruit)
        setShowEdit(true)
    }
    const handleDelClick = (fruit) => {
        setFruit(fruit)
        setShowDel(true)
    }

  return (
    <div className="Main--container">
        {
            !showAdd && !showEdit && !showDel ? (
            <Accordion className="accordion">
                {
                fruits?.map(fruit => (
                    <Accordion.Item eventKey={fruit._id} key={fruit._id}>
                        <Accordion.Header>{fruit.name}&nbsp;<span className="quantityTxt">({fruit.remain})</span></Accordion.Header>
                        <Accordion.Body>
                        <div className="btn">
                            <Button variant="primary" onClick={() => handleAddClick(fruit)}>Add</Button>
                            <Button variant="primary" onClick={() => handleEditClick(fruit)}>Edit</Button>
                            <Button variant="danger" onClick={() => handleDelClick(fruit)}>Delete</Button>
                        </div>
                        <span className="price">Price: {fruit.price} đ/kg</span>
                        </Accordion.Body>
                    </Accordion.Item>
                ))
                }
            </Accordion>
            ) : (
            showAdd ? (
                <Add fruit={fruit} setShow={setShowAdd} />
            ) : (
                showEdit ? (
                <Edit fruit={fruit} setShow={setShowEdit} />
                ) : (
                <Del fruit={fruit} setShow={setShowDel}/>
                )
            )
            )
        }
    </div>
  )
}

export default Main