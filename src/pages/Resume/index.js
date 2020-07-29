import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Question () {
    return (
        <div className="resume-container">
           <div className="card">
                <div className="card-body">
                    <section>                   
                        <h2 className="mt-2 text-center">Resumo da Prova</h2><hr></hr>
                        <h4 id="enunciado" className="ml-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </h4>
                        <div className="row mt-4 justify-content-center">
                            <ul class="list-group">
                                <li class="list-group-item list-group-item-success">Questões respondidas: <span>30</span></li>
                                <li class="list-group-item list-group-item-danger">Questões não respondidas: <span>10</span></li>
                            </ul>
                        </div>
                        
                    </section>
                    <br />
                    <div className="row justify-content-center">
                        <Link className="btn btn-secondary" to="/question">Voltar às questões</Link>
                        <Link className="btn btn-success ml-2" to="/question">Terminar a prova</Link>
                    </div>
                </div>
            </div>
        </div>
        
    );
}