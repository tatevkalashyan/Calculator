import React from 'react'
import Item from './Item'
import './Table.scss'

const Table = () => {

    return (
        <section className='Table'>
            <div className='Table-Title'>
                <div className='Table-Title-1 info-share'>
                    <p>Pmt</p>
                    <p>Principal</p>
                    <p>Interrest</p>
                    <p>Cum Prin</p>
                    <p>Cum Int</p>
                    <p>Prin Bal</p>
                </div>
            </div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => <Item key={item} />)}
        </section>
    )
}

export default Table