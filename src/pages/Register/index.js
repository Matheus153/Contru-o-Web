import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import imgFoto from '../../assets/omni.png';

export default function Register() {
    function handleRegister(e) {
        e.preventDefault();
    }

    return (//<h1>Register</h1>
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={imgFoto} alt="Stack"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e descubra um mundo novo</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02053"/>
                        Não tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="Nome do curso"/>
                    <input type="email" placeholder= "E-mail"/>
                    <input placeholder="WhatssApp"/>

                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{ width: 80 }}/>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}