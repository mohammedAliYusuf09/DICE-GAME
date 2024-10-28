import { useState } from 'react'
import dice1 from '../assets/dice_1.png'
import dice2 from '../assets/dice_2.png'
import dice3 from '../assets/dice_3.png'
import dice4 from '../assets/dice_4.png'
import dice5 from '../assets/dice_5.png'
import dice6 from '../assets/dice_6.png'
import rollDice from '../util/giveaNumber'

export default function DiceImage({setShow, setSelectedNum, handelDiceClick, selectedNum, scoreHandel}) {

    const dice  = [dice1, dice2, dice3, dice4, dice5, dice6];
    const [ randomNumber, setRendomNumber] = useState(0);

    const handelOnClickDice = ()=> {
      if(selectedNum === 0){
        setShow(true)
      }else{
        setShow(false)
        const randomNumberFan = rollDice();
        setRendomNumber(randomNumberFan);
        scoreHandel(randomNumberFan + 1);
        setSelectedNum(0);
      }
    }


    
  return (
    <img onClick={handelOnClickDice} className='w-44' src={dice[randomNumber]} alt="dice_1" />
  )
}
