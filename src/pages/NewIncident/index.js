import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import imgFoto from '../../assets/omni.png';

export default function NewIncident() {
    return (
        <div className="new-incident">
            <div className="content">
                <section>
                    <img src={imgFoto} alt="Stack"/>

                    <h1>Cadastrar novo assunto</h1>
                    <p>Descreva o assunto para que outros possam se interessar pelo conteúdo</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02053"/>
                        Voltar para home
                    </Link>
                </section>

                <form>
                    <input placeholder="Título"/>
                    <textarea placeholder="Descrição" />
                    <input placeholder="Área de atuação"/>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}