import React from 'react'
import dice from '../assets/dice.png'
import ButtonPri from '../util/ButtonPri'

export default function Landing({onButtonClick}) {
  return (
    <div className='flex justify-center h-full'>
      <div className='flex '>
          <img className='w-1/2 flex justify-center items-center' src={dice} alt="dice image" />
          <div className='w-1/2 flex flex-col justify-center items-center gap-4'>
              <div className='text-end'>
                  <h1 className='text-8xl font-bold leading-relaxed'>DICE GAME</h1>
                  <ButtonPri onButtonClick={onButtonClick}>Play Now</ButtonPri>
              </div>
          </div>
      </div>
    </div>
  )
}
