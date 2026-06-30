import { Link } from "react-router-dom";
import "../styles/cadastro.css";
import arara from "../assets/arara.jpg";

function Cadastro() {
    return (
        <div className="cadastro-container">

            <section className="cadastro-left">

                <div className="cadastro-box">

                    <div className="logo">
                        🌿 ECOAÇÃO
                    </div>

                    <h1>Criar Conta</h1>

                    <p>
                        Faça parte da nossa comunidade e contribua para um futuro
                        mais sustentável.
                    </p>

                    <form>

                        <div className="cadastro-input-box">
                            <label>Nome completo</label>

                            <input
                                type="text"
                                placeholder="Digite seu nome"
                                required
                            />
                        </div>

                        <div className="cadastro-input-box">
                            <label>E-mail</label>

                            <input
                                type="email"
                                placeholder="Digite seu e-mail"
                                required
                            />
                        </div>

                        <div className="cadastro-input-box">
                            <label>Senha</label>

                            <input
                                type="password"
                                placeholder="Crie uma senha"
                                required
                            />
                        </div>

                        <div className="cadastro-input-box">
                            <label>Confirmar senha</label>

                            <input
                                type="password"
                                placeholder="Repita sua senha"
                                required
                            />
                        </div>

                        <button className="cadastro-button" type="submit">
                            Criar Conta
                        </button>

                    </form>

                    <div className="login">

                        Já possui uma conta?

                        <Link to="/">Entrar</Link>

                    </div>

                </div>

            </section>

            <section className="cadastro-right">

                <img
                    src={arara}
                    alt="Floresta"
                />

            </section>

        </div>
    );
}

export default Cadastro;