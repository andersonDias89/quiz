import React from 'react'

import Quiz  from "../img/quiz.svg"
import "./Welcome.css"

const Welcome = () => {
    return (
        <div>
            <h2>Seja bem-vindo ao Quiz</h2>
            <p>Clique no botão para começar</p>
            <button>Começar</button>
            <img src={Quiz} alt="" />
        </div>
    )
}

export default Welcome