import { Link } from "react-router-dom";
import "../styles/login.css";
import urso from "../assets/urso.jpg";

function Login() {
    return (
        <div className="container">

            {/* LOGIN */}

            <div className="left">

                <div className="login-box">

                    <h1>EcoAção</h1>

                    <h2>Bem-vindo!</h2>

                    <p>Entre para continuar.</p>

                    <form onSubmit={(e) => e.preventDefault()}>

                        <div className="input-box">

                            <i className="fa-solid fa-envelope"></i>

                            <input
                                type="email"
                                placeholder="E-mail"
                                required
                            />

                        </div>

                        <div className="input-box">

                            <i className="fa-solid fa-lock"></i>

                            <input
                                type="password"
                                placeholder="Senha"
                                required
                            />

                        </div>

                        <div className="options">

                            <label>

                                <input type="checkbox" />

                                Lembrar-me

                            </label>

                            <a href="#">Esqueci a senha</a>

                        </div>

                        <button type="submit">
                            Entrar
                        </button>

                    </form>

                    <div className="cadastro">

                        Não possui uma conta?

                        <Link to="/cadastro">Cadastre-se</Link>

                    </div>

                </div>

            </div>

            {/* IMAGEM */}

            <div className="right">

                <img
                    src={urso}
                    alt="Urso Polar"
                />

            </div>

        </div>
    );
}

export default Login;