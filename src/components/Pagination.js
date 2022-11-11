import React, { useEffect, useState } from 'react'
import '../styles/Pagination.css'

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        const value = showPerPage * counter
        onPaginationChange(value - showPerPage, value)
    }, [counter])

    const onButtonClick = (type) => {
        if (type === 'prev') {
            if (counter == 1) {
                setCounter(1)
            } else {
                setCounter(counter - 1)
            }
        } else if (type === 'next') {
            if (Math.ceil(total / showPerPage) == counter) {
                setCounter(counter)
            } else {
                setCounter(counter + 1)
            }

        }
    }
    return (
        <div className='pagination_Container'>
            <button onClick={() => onButtonClick('prev')} type="button" className="btn btn-outline-info">Previous</button>
            <button onClick={() => onButtonClick('next')} type="button" className="btn btn-outline-info">Next</button>
        </div>
    )
}

export default Pagination