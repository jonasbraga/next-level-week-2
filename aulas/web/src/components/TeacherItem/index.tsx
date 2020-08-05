import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://via.placeholder.com/500x500.jpeg?text=Jonas%20Braga" alt="Jonas Braga"/>
                <div>
                    <strong>Jonas Braga</strong>
                    <span>Programação</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                <br/>
                <br/>
                Labore recusandae ab rerum sapiente voluptatum, repellat placeat ea odio, voluptas esse nobis, temporibus suscipit voluptatem quos. Quam vero tempore suscipit odio!
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;