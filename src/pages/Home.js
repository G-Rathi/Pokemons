import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import PokemonCard from '../components/PokemonCard'
import { Routes, Route, HashRouter } from 'react-router-dom'
import '../styles/Home.css'
import PokemonDetails from './PokemonDetails'
import Pagination from '../components/Pagination'




const Home = () => {
    return (
        <HashRouter>
            <div className='main_Container'>
                <Routes>
                    <Route path='/' element={<AllPokemons />} />
                    <Route path='/pokemon/:id' element={<PokemonDetails />} />
                </Routes>
            </div>
        </HashRouter>
    )
}

export default Home

const Loader=()=>{
    return(
        <div style={{width:"55rem",height:"30rem", display:"flex",alignItems:"center",justifyContent:"center"}}>
        <h1 style={{color:"white"}}>Loading...</h1>
        </div>
    )
}


export const AllPokemons = () => {
    const [pokemons, setPokemons] = useState([])
    const [loading,setLoading]=useState(true);
    const [showPerPage, setShowPerPage] = useState(12)
    const [pagination, setPagination] = useState({ start: 0, end: showPerPage })

    const getData = async () => {
        try {
            const response = await axios.get("https://api.pokemontcg.io/v2/cards?page=1&pageSize=100")
            const pokemonsData = await response.data.data

            setPokemons(pokemonsData)
            setLoading(false)
        }
        catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getData()
    }, [])


    const onPaginationChange = (start, end) => {
        setPagination({ start: start, end: end })

    }

    return (
        <Fragment>
            <div className='allPokemonContainer'>
                {loading?<Loader />:
                    pokemons?.slice(pagination?.start, pagination?.end)?.map((pokemon) => {
                        return (
                            <PokemonCard pokemon={pokemon} key={pokemon.id} />
                        )
                    })
                }
            </div>
            <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={pokemons.length} />
        </Fragment>
    )
}

