import React from "react";
import { LoginForm } from "../components/Login/LoginForm"; 

const LoginPage: React.FC = () => {
    return (
        <div>
            <div>
                <h1>Iniciar Sesión</h1>
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage;