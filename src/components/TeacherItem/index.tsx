import React from 'react'

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css'

function TeacherItem() {
  return(
    <article className="teacher-item">
          <header>
            <img
              src="https://instagram.fcgh43-1.fna.fbcdn.net/v/t51.2885-19/s150x150/76879952_570984313459722_1977255372297076736_n.jpg?_nc_ht=instagram.fcgh43-1.fna.fbcdn.net&_nc_ohc=sN9xKA66D7AAX_vm42S&oh=e501164d6ffcf55a0154be30f733c97c&oe=5F514A0D"
              alt="Cristiano Oliveira"
            />
            <div>
              <strong>Cristiano Oliveira</strong>
              <span>Química</span>
            </div>
          </header>
          <div>
            <p>cansado demais para copiar o texto e colar aqui!</p>
            <footer>
              <p>
                Preço/hora
                <strong>R$ 100,00</strong>
              </p>
              <button type="button">
                <img src={whatsappIcon} alt="whatsapp" />
                Entrar em contato
              </button>
            </footer>
          </div>
    </article>
  )
}

export default TeacherItem;