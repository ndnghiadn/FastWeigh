import React, { useEffect, useState } from 'react'
import { Badge, Button, FormControl, InputGroup, Alert } from 'react-bootstrap'
import { toast } from 'react-toastify'
import Header from './Header'
import axios from 'axios'

const Home = () => {
    const [visibleTrack, setVisibleTrack] = useState(false)
    const [following, setFollowing] = useState(false)
    const [purchasing, setPurchasing] = useState(false)
    const [billCode, setBillCode] = useState()
    const [bill, setBill] = useState()
    const [threeDots, setThreeDots] = useState()

    // const calculate = () => {
    //     let totalPrice = 0
    //     products.forEach(product => {
    //         totalPrice += product.weight * product.price
    //     })
    //     return totalPrice
    // }

    const handleTrack = () => {
        if (bill) {
            setFollowing(true)
        } else {
            toast.warn('Invalid Code!')
        }
    }

    useEffect(() => {
        
        if (billCode) {
            const getBillInterval = setInterval(async () => {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/bill/${billCode}`)
                if (response.status === 200 && response.data) {
                    setBill(response.data)
                }
            }, 1000)
            return () => {
                clearInterval(getBillInterval)
            }
        }
    }, [billCode])

    useEffect(() => {
        let str = ''
        let i = 0
        const animatedDots = setInterval(() => {
            if (i > 2) {
                i = 0
                str = ''
            }
            str += '.'
            setThreeDots(str)

            ++i
        }, 1000)

        return () => {
            clearInterval(animatedDots)
        }
    }, [])

  return (
    <>
        <Header setVisibleTrack={setVisibleTrack}/>
        {
            visibleTrack && (
                <div className="Home--container">
                    <InputGroup>
                        <InputGroup.Text id="btnGroupAddon">#</InputGroup.Text>
                        <FormControl
                            type="text"
                            placeholder="Code"
                            aria-label="Code"
                            aria-describedby="btnGroupAddon"
                            onChange={(e) => setBillCode(e.target.value)}
                        />
                    </InputGroup>
                    <Button variant="primary" onClick={handleTrack}>Track</Button>
                    {
                        following && (
                            <>
                                <Alert key="primary" variant="primary" id="TrackBoard">
                                    <h6>{purchasing ? `Purchasing bill#${billCode}` : `Following bill#${billCode}${threeDots}`}</h6><br></br>
                                    {
                                        purchasing ? (
                                            <>
                                                <h3>Products:&nbsp;<Badge bg="danger">{bill?.LisFruits.length}</Badge></h3>
                                                <ul>
                                                    {
                                                        bill?.LisFruits.map((product, index) => (
                                                            <li key={index}>{product.idfruit.name} | {product.weight} kg | {product.idfruit.price} VND/KG<h6><span style={{ color: 'green' }}>{product.weight * product.idfruit.price}</span> đồng</h6></li>
                                                        ))
                                                    }
                                                </ul>
                                                <h5>Tổng cộng: <span style={{ color: 'green' }}>{bill?.totalPrice}</span> đồng</h5>
                                            </>
                                        ) : (
                                            bill?.LisFruits.map((product, index) => (
                                                <div className="item" key={index}>
                                                    <h4>#{index + 1}</h4>
                                                    <div className="info">
                                                        <div><p>Name:&nbsp;</p><h5>{product.idfruit.name}</h5></div>
                                                        <div><p>Weight:&nbsp;</p><span>{product.weight}</span></div>
                                                    </div>
                                                    <img src={`http://localhost:5000/images/${product.idfruit.avatar}`} alt={product.idfruit.name} />
                                                </div>
                                            ))
                                        )
                                    }
                                </Alert>
                                {
                                    !purchasing && (<Button variant="success" onClick={() => setPurchasing(true)}>Purchase <Badge bg="secondary">{bill?.LisFruits.length}</Badge></Button>)
                                }
                            </>
                        )
                    }
                </div>
            )
        }
    </>
  )
}

export default Home