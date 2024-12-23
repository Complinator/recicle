import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Recycle, User, UserPlus } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { UserProfile } from "../Pages/Components/Profile";
import '../../App.css';

const AppNavbar = () => {
    const [isBrandHovered, setIsBrandHovered] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [isProfileHovered, setIsProfileHovered] = useState(false);
    const { currentUser } = useAuth();
    const navigate = useNavigate();

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
            to: "/aboutus", 
            label: "Nosotros", 
            hoverStyle: {
                backgroundColor: '#ffc107',
                color: 'white',
                borderColor: '#ffc107'
            }
        },
        { 
            to: "/news", 
            label: "Noticias", 
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

     // Profile button styles
     const profileButtonBaseStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '2px solid #00A19B',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden'
    };

    const profileButtonHoverStyle = isProfileHovered ? {
        ...profileButtonBaseStyle,
        backgroundColor: '#00A19B',
        transform: 'scale(1.1)'
    } : profileButtonBaseStyle;

    return (
        <>
            <Navbar 
                bg="light" 
                expand="lg" 
                className="shadow-sm navbar-custom"
            >
                <Container className="gap-3">
                    <Navbar.Brand 
                        className="navbar-brand-custom me-4"
                        onMouseEnter={() => setIsBrandHovered(true)}
                        onMouseLeave={() => setIsBrandHovered(false)}
                    >
                        <Link 
                            to="/" 
                            className="d-flex align-items-center text-decoration-none"
                        >
                            <Recycle 
                                color="#00A19B" 
                                size={50}
                                className={`brand-icon ${isBrandHovered ? 'brand-icon-hover' : ''}`}
                            />
                            <span 
                                className={`brand-text ms-2 ${isBrandHovered ? 'brand-text-hover' : ''}`}
                            >
                                REvuelta
                            </span>
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {navLinks.map((link, index) => (
                                <Nav.Link 
                                    key={index} 
                                    as={Link} 
                                    to={link.to}
                                    className="nav-link-custom nav-link-with-underline mx-2 mt-1"
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
                        
                        <div className="ms-auto">
                            {currentUser ? (
                                <div className="position-relative">
                                    <Button 
                                        variant="link" 
                                        className="p-1 d-flex align-items-center justify-content-center"
                                        onClick={() => setShowProfile(true)}
                                        onMouseEnter={() => setIsProfileHovered(true)}
                                        onMouseLeave={() => setIsProfileHovered(false)}
                                        style={profileButtonHoverStyle}
                                    >
                                        {isProfileHovered ? (
                                            <User 
                                                size={20} 
                                                color={isProfileHovered ? 'white' : '#00A19B'}
                                                className="profile-icon"
                                            />
                                        ) : (
                                            <div 
                                                className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
                                                style={{ 
                                                    width: '24px', 
                                                    height: '24px', 
                                                    backgroundColor: '#00A19B',
                                                    color: 'white',
                                                    fontSize: '14px',
                                                    fontWeight: 'bold'
                                                }}
                                            >
                                                {currentUser.name.charAt(0).toUpperCase()}
                                            </div>
                                        )}
                                    </Button>
                                </div>
                            ) : (
                                <Button 
                                    variant="link"
                                    className="p-1 d-flex align-items-center justify-content-center"
                                    onClick={() => navigate('/auth')}
                                    onMouseEnter={() => setIsProfileHovered(true)}
                                    onMouseLeave={() => setIsProfileHovered(false)}
                                    style={profileButtonHoverStyle}
                                >
                                    <UserPlus 
                                        size={20} 
                                        color={isProfileHovered ? 'white' : '#00A19B'}
                                        className="profile-icon"
                                    />
                                </Button>
                            )}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            <UserProfile 
                show={showProfile}
                onHide={() => setShowProfile(false)}
            />
        </>
    );
};

export default AppNavbar;