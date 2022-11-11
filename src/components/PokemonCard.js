import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/PokemonCard.css'




const PokemonCard = ({ pokemon }) => {


    return (
        <div className="card_container" >
            <img src={pokemon.images.small} className='movieimage' />
            <Link to={`/pokemon/${pokemon.id}`} >
                <div className="cardInfo">
                    <div className="name">
                        {pokemon.name}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default PokemonCard

