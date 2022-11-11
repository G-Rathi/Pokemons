import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AbilitiesDetails from '../components/AbilitiesDetails'
import AttackDetails from '../components/AttackDetails'
import '../styles/PokemonDetails.css'


const PokemonDetails = () => {
    const [pokemonDetail, setPokemonDetail] = useState([])
    const [pokemonImage, setPokemonImage] = useState('')
    // const [pokemonTypes, setPokemonTypes] = useState([])
    // const [pokemonWeaknesses, setPokemonWeaknesses] = useState([])
    // const [pokemonAbilities, setPokemonAbilities] = useState([])
    // const [pokemonAttacks, setPokemonAttacks] = useState([])
    const { id } = useParams()




    const getData = async () => {
        const response = await axios.get(`https://api.pokemontcg.io/v2/cards/${id}`)
        const pokemonData = await response.data.data
        const pokemonImageLink = await pokemonData.images.large
        // const pokemontypes = await pokemonData.types
        // const pokemonweaknesses = await pokemonData.weaknesses
        // const pokemonabilities = await pokemonData.abilities
        // const pokemonattacks = await pokemonData.attacks

        // console.log('types :', pokemontypes)
        // console.log('weaknesses :', pokemonweaknesses)
        // console.log('Abilities :', pokemonabilities)
        // console.log('Attacks :', pokemonattacks)

        setPokemonDetail(pokemonData)
        setPokemonImage(pokemonImageLink)
        // setPokemonTypes(pokemontypes)
        // setPokemonWeaknesses(pokemonweaknesses)
        // setPokemonAbilities(pokemonabilities)
        // setPokemonAttacks(pokemonattacks)
    }

    useEffect(() => {
        getData()
    }, [])




    return (
        <div className='details_Container'>
            <div className="pokemon_details">
                <div className="name_hp_Container">
                    <h1>{pokemonDetail.name}</h1>
                    <span>HP<span className='hpNumber'>{pokemonDetail.hp}</span></span>
                </div>
                {pokemonDetail.level ?
                    <div className="level">
                        <span>LV &#183; {pokemonDetail.level}</span>
                    </div> : ''}
                <div className='evolves'>
                    {pokemonDetail.evolvesFrom ? <div ><span className='evolve'>Evolves from {pokemonDetail.evolvesFrom} </span></div> : ''}
                    {pokemonDetail.evolvesTo ? <div ><span className='evolve'>Evolves to {pokemonDetail.evolvesTo} </span></div> : ''}
                </div>
                {pokemonDetail.types ?
                    <div className='types'>
                        Types
                        <div className='types_container' >
                            {pokemonDetail.types.map((type, index) => {
                                return (
                                    <span className='pokemon_type' key={index}>{type}</span>
                                )
                            })}
                        </div>
                    </div> : ''}
                {pokemonDetail.attacks ?
                    <div className='attacks'>
                        Attacks
                        <div className='attacks_container'>
                            {pokemonDetail.attacks.map((attack, index) => {
                                return (
                                    <div className='attack' key={index}>
                                        <AttackDetails attack={attack} />
                                    </div>
                                )
                            })}
                        </div>
                    </div> : ''}
                {pokemonDetail.abilities ?
                    <div className='abilities'>
                        Abilities
                        <div className='abilities_Container' >
                            {pokemonDetail.abilities.map((ability, index) => {
                                return (
                                    <div className='ability' key={index}>
                                        <AbilitiesDetails ability={ability} />
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div> : ''}
                {pokemonDetail.weaknesses ?
                    <div className='weaknesses'>
                        Weaknesses
                        <div className='weaknesses_typeContainer' >
                            {pokemonDetail.weaknesses.map((weakness, index) => {
                                return (
                                    <div key={index}>
                                        <span className='weaknesses_type' >{weakness.type} </span>
                                        <span className='weaknesses_value' >{weakness.value} </span>
                                    </div>
                                )
                            })}
                        </div>
                    </div> : ''}
            </div>
            <img src={pokemonImage} alt={pokemonDetail.name} className='pokemonLargeImage' />
        </div>
    )
}

export default PokemonDetails
