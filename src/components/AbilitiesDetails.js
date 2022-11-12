import React, { Fragment, useState } from 'react'
import '../styles/AbilitiesDetails.css'

const AbilitiesDetails = (props) => {
    const [abilityDetail, setAbilityDetail] = useState(false)

    const { ability } = props

    const handleAbilityDetail = (e) => {
        e.preventDefault()
        setAbilityDetail(!abilityDetail)
    }

    return (
        <Fragment>
            <button onClick={handleAbilityDetail} className="btn btn-primary btn-sm me-3 abilityBtn"> {ability.type}</button>
            {abilityDetail ?
                <div className='ability_detail_Container'>
                    <div className='abilityName'>{ability.name} </div>
                    <div className='abilityText'>{ability.text}</div>
                </div> : ''}
        </Fragment>

    )
}

export default AbilitiesDetails