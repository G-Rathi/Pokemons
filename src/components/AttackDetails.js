import React, { useState } from 'react'
import '../styles/AttackDetails.css'

const AttackDetails = (props) => {
    const [attackDetail, setAttackDetail] = useState(false)

    const { attack } = props

    const handleAttackDetail = (e) => {
        e.preventDefault()
        setAttackDetail(!attackDetail)
    }

    return (
        <>
            <button onClick={handleAttackDetail} className="btn btn-success btn-sm me-2 attackBtn">
                {attack.name}</button>
            {attackDetail ?
                <div className='attack_detail_Container'>
                    <div className='attackName'>{attack.name} </div>
                    {attack.damage ?
                        <div className='attackDamage'>
                            Damage &#183; {attack.damage}
                        </div> : ''}
                    {attack.cost ?
                        <div className='attackCost'>
                            Cost &#183;
                            {attack.cost.map((attackcost, index) => {
                                return (
                                    <span key={index} className='cost'>{attackcost} </span>
                                )
                            })} </div> : ''}
                    <div className='attackText'>{attack.text}</div>
                </div> : ''}

        </>
    )
}

export default AttackDetails