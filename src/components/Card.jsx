import React from 'react'
import './Card.css'

export default props => {
    return (
        <div className="card card__amex">
            <div className="flag">
                <span className="flag__image amex"></span>
            </div>

            <div className="card__number">
                <span className="text">4582 9436 4384 4345</span>
            </div>

            <div className="card__info">
                <div className="card__info--name">
                    <span className="title">Nome</span>
                    <span className="text small">Junior A Alves</span>
                </div>

                <div className="card__info--date">
                    <span className="title">Validade</span>
                    <span className="text small">07/21</span>
                </div>
            </div>
        </div>
    )
}