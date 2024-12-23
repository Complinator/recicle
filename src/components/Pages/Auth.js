import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import "../../App.css";
import { Alert } from "react-bootstrap";
import { MdAlternateEmail } from "react-icons/md";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: ''
    });
    const { login, register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            const success = login(email, password);
            if (success) {
                navigate('/');
            } else {
                setError('Correo electrónico o contraseña incorrectos');
            }
        } else {
            if (formData.password !== formData.confirmPassword) {
                setError('Las contraseñas no coinciden');
                return;
            }
            
            const success = register(formData.email, formData.password, formData.name);
            if (success) {
                navigate('/');
            } else {
                setError('El correo electrónico ya está registrado');
            }
        }
    };

    return (
        <div className="wrapper">
            <div className="in-wrapper">
                <form action="" onSubmit={handleSubmit}>
                    <h1 className="mb-3">{isLogin? "Iniciar Sesión" : "Registrarse"}</h1>

                    {
                    isLogin &&
                    <>
                        {error && <Alert variant="danger" style={{fontSize: "0.9rem"}}>{error}</Alert>}
                        <div className="input-box">
                            <input type="email" placeholder="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <FaLock className="icon" />
                        </div>

                        <div className="remember-forgot mt-2">
                            <label><input type="checkbox" />Recuerdame</label>
                            <button>¿Contraseña olvidada?</button>
                        </div>
                    </>
                    }

                    {
                    !isLogin &&
                    <>
                        {error && <Alert variant="danger" style={{fontSize: "0.9rem"}}>{error}</Alert>}
                        <div className="input-box">
                            <input type="text" placeholder="Nombre Completo" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder="Correo Electrónico" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                            <MdAlternateEmail className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Contraseña" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
                            <FaLock className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Confirmar Contraseña" value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} required />
                            <FaLock className="icon" />
                        </div>
                    </>
                    }

                    <button type="submit">{isLogin? "Iniciar Sesión" : "Registrarse"}</button>

                    <div className="register-link">
                        <p>{isLogin? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"} <button onClick={() => {setIsLogin(!isLogin); setError("")}}>{isLogin? "Registrarse" : "Iniciar sesión"}</button></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Auth;