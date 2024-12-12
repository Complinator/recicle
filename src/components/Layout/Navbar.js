import React, { useState } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Recycle } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import '../../App.css';

const AppNavbar = () => {
    const [isBrandHovered, setIsBrandHovered] = useState(false);

    const navLinks = [
        { 
            to: "/points", 
            label: "Localización", 
            hoverStyle: {
                backgroundColor: '#28a745',
                color: 'white',
                borderColor: '#28a745'
            }
        },
        { 
            to: "/info", 
            label: "Información", 
            hoverStyle: {
                backgroundColor: '#17a2b8',
                color: 'white',
                borderColor: '#17a2b8'
            }
        },
        { 
            to: "/activities", 
            label: "Actividades", 
            hoverStyle: {
                backgroundColor: '#ffc107',
                color: 'white',
                borderColor: '#ffc107'
            }
        },
        { 
            to: "/market", 
            label: "Tienda", 
            hoverStyle: {
                backgroundColor: '#dc3545',
                color: 'white',
                borderColor: '#dc3545'
            }
        }
    ];

    return (
        <Navbar 
            bg="light" 
            expand="lg" 
            className="shadow-sm navbar-custom"
        >
            <Container>
                <Navbar.Brand 
                    className="navbar-brand-custom"
                    onMouseEnter={() => setIsBrandHovered(true)}
                    onMouseLeave={() => setIsBrandHovered(false)}
                >
                    <Link 
                        to="/" 
                        className="d-flex align-items-center text-decoration-none"
                    >
                        <Recycle 
                            color="green" 
                            size={50}
                            className={`me-3 brand-icon ${isBrandHovered ? 'brand-icon-hover' : ''}`}
                        />
                        <span 
                            className={`brand-text ${isBrandHovered ? 'brand-text-hover' : ''}`}
                        >
                            REvuelta
                        </span>
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="align-items-center">
                        {navLinks.map((link, index) => (
                            <Nav.Link 
                                key={index} 
                                as={Link} 
                                to={link.to}
                                className="nav-link-custom nav-link-with-underline mx-2"
                                style={{
                                    transition: 'all 0.3s ease',
                                    '--hover-bg': link.hoverStyle.backgroundColor,
                                    '--hover-color': link.hoverStyle.color,
                                    fontSize: '1.2rem'
                                }}
                            >
                                {link.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;