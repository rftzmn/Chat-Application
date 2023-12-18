import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import { ProdContext } from '../context/ProductContext'

const Cards = () => {
    const {cardData} = useContext(ProdContext);    
    
  return (
    <div className='chat p-10 flex flex-wrap gap-4'>
        {
            cardData.map((data, index)=>  (
                console.log(data)
                <Card key={index}></Card>
            ))
        }

        
    </div>
  )
}

export default Cards