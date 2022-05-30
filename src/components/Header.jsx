import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = ({ setVisibleTrack }) => {
  return (
    <Navbar className="Header--container" >
        <Link to="/">
            <Navbar.Brand className="logo">Fast Weigh</Navbar.Brand>
        </Link>
        <Navbar.Collapse className="collapse">
            <Nav className="me-auto">
                <NavDropdown title="Target" id="nav-dropdown">
                <NavDropdown.Item onClick={() => setVisibleTrack(true)}>Follow</NavDropdown.Item>
                <NavDropdown.Divider />
                <Link to='/admin' style={{ textDecoration: 'none', color: 'black', fontWeight: '700' }}>
                    <div className="item">
                        Login
                    </div>
                </Link>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header