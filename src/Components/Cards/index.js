import React from 'react';
import './style.css';

function Cards(){
    return(
        <div className="card-container">
            <h2>Título</h2>
            <p><strong>Duração: </strong></p>
            <p><strong>Preço: </strong></p>
            <p><em>IMAGEM</em></p>
            <p><strong>Descrição: </strong>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
        </div>
    );
}

export default Cards;