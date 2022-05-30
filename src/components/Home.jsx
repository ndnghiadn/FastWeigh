import React, { useEffect, useState } from 'react'
import { Badge, Button, FormControl, InputGroup, Alert } from 'react-bootstrap'
import Header from './Header'
import axios from 'axios'

const Home = () => {
    const [visibleTrack, setVisibleTrack] = useState(false)
    const [following, setFollowing] = useState(false)
    const [purchasing, setPurchasing] = useState(false)
    const [products, setProducts] = useState([])
    const [billId, setBillId] = useState()

    const calculate = () => {
        let totalPrice = 0
        products.forEach(product => {
            totalPrice += product.weight * product.price
        })
        return totalPrice
    }

    const handleTrack = () => {
            setFollowing(true)
    }

    useEffect(() => {
        
        if (following && billId) {
            const getBillInterval = setInterval(async () => {
                const bill = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/bill/${billId}`)
                if (bill.status === 200 && bill.data[0]) {
                    // set products
                }
            }, 1000)
            return () => {
                clearInterval(getBillInterval)
            }
        }
    }, [following, billId])

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
                            placeholder="Bill ID"
                            aria-label="Bill ID"
                            aria-describedby="btnGroupAddon"
                            onChange={(e) => setBillId(e.target.value)}
                        />
                    </InputGroup>
                    <Button variant="primary" onClick={handleTrack}>Track</Button>
                    {
                        following && (
                            <>
                                <Alert key="primary" variant="primary" id="TrackBoard">
                                    <h6>{purchasing ? `Purchasing Bill #${billId}` : 'Following...'}</h6><br></br>
                                    {
                                        purchasing ? (
                                            <>
                                                <h3>Products:&nbsp;<Badge bg="danger">{products.length}</Badge></h3>
                                                <ul>
                                                    {
                                                        products.map((product, index) => (
                                                            <li key={index}>{product.name} | {product.weight} kg | {product.price} VND/KG<h6><span style={{ color: 'green' }}>{product.weight * product.price}</span> đồng</h6></li>
                                                        ))
                                                    }
                                                </ul>
                                                <h5>Tổng cộng: <span style={{ color: 'green' }}>{calculate()}</span> đồng</h5>
                                            </>
                                        ) : (
                                            products.map((product, index) => (
                                                <div className="item" key={index}>
                                                    <h4>#{index + 1}</h4>
                                                    <div className="info">
                                                        <div><p>Name:&nbsp;</p><h5>{product.name}</h5></div>
                                                        <div><p>Weight:&nbsp;</p><span>{product.weight}</span></div>
                                                    </div>
                                                    <img src={product.image} alt={product.name} />
                                                </div>
                                            ))
                                        )
                                    }
                                </Alert>
                                {
                                    !purchasing && (<Button variant="success" onClick={() => setPurchasing(true)}>Purchase <Badge bg="secondary">{products.length}</Badge></Button>)
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