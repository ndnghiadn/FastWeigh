import React, { useState } from 'react'
import { Badge, Button, FormControl, InputGroup, Alert } from 'react-bootstrap'
import Header from './Header'

const Home = () => {
    const [visibleTrack, setVisibleTrack] = useState(false)
    const [following, setFollowing] = useState(false)
    const [purchasing, setPurchasing] = useState(false)
    const [products, setProducts] = useState([
        {
            name: 'Apple',
            weight: 2.68,
            price: 19800,
            image: 'https://dictionary.cambridge.org/vi/images/thumb/apple_noun_001_00650.jpg?version=5.0.243'
        },
        {
            name: 'Banana',
            weight: 1.98,
            price: 12800,
            image: 'https://us.123rf.com/450wm/nikitos77/nikitos771205/nikitos77120500769/13739513-ripe-bananas-on-a-white-background.jpg?ver=6'
        }
    ])

    const calculate = () => {
        let totalPrice = 0
        products.forEach(product => {
            totalPrice += product.weight * product.price
        })
        return totalPrice
    }

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
                        />
                    </InputGroup>
                    <Button variant="primary" onClick={() => setFollowing(true)}>Track</Button>
                    {
                        following && (
                            <>
                                <Alert key="primary" variant="primary" id="TrackBoard">
                                    <h6>{purchasing ? 'Purchasing Bill #123' : 'Following...'}</h6><br></br>
                                    {
                                        purchasing ? (
                                            <>
                                                <h3>Products:&nbsp;<Badge bg="danger">{products.length}</Badge></h3>
                                                <ul>
                                                    {
                                                        products.map((product, index) => (
                                                            <li>{product.name} | {product.weight} kg | {product.price} VND/KG<h6><span style={{ color: 'green' }}>{product.weight * product.price}</span> đồng</h6></li>
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