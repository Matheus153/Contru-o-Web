import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import imgFoto from '../../assets/omni.png';
import Atom from '../../assets/logo512.png';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={imgFoto} alt="Omnistack"/>

                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder= "Sua ID"/>
                    <button type= "Submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02053"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={Atom} alt="atomic"/>
        </div>
     );
}