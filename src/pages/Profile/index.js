import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './styles.css';

import imgFoto from '../../assets/BeThe.png';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={imgFoto} alt="PNG"/>
                <span>Bem vindo, Dev!</span>

                <Link className="button" to="/incidents/new">Cadastrar novo assunto</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Temas cadastrados</h1>

            <ul>
                <li>
                    <strong>TEMA:</strong>
                    <p>Tema teste</p>

                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>

                    <strong>Proposta:</strong>
                    <p>Alguma coisa</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>TEMA:</strong>
                    <p>Tema teste</p>

                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>

                    <strong>Proposta:</strong>
                    <p>Alguma coisa</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>TEMA:</strong>
                    <p>Tema teste</p>

                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>

                    <strong>Proposta:</strong>
                    <p>Alguma coisa</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>TEMA:</strong>
                    <p>Tema teste</p>

                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>

                    <strong>Proposta:</strong>
                    <p>Alguma coisa</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

            </ul>
        </div>
    );
}
