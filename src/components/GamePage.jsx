import ButtonPri from '../util/ButtonPri';
import ButtonWhite from '../util/ButtonWhite';
import Scour from './Scour';
import { useState } from 'react';
import Loader from './Loader';
import setTimeoutExample from '../util/waitamomunt';
import rollDice from '../util/giveaNumber';
import DiceImage from './DiceImage';

export default function GamePage() {
    const options = [1,2,3,4,5,6];
    const [rouls, setRouls] = useState(false);
    const [selectedNum, setSelectedNum] = useState(0);
    const [sprining, setSprining] = useState(false);
    const [score, setScore] = useState(0);
    const [show, setShow] = useState(false);



    const scoreHandel = (diceNumber) => {
        console.log("Somthing is going on" + diceNumber , selectedNum);
        if(selectedNum == diceNumber){
            setScore((score)=> score + selectedNum);
        }else{
            setScore((score)=> score - 2);
        }
    }

    const handelDiceClick = () => {
        setSprining(true);
        setTimeoutExample(()=> {
            setSprining(false)
        }, 2000)
    }


    const handelSelectNumber = (num) => {
        setSelectedNum(num);
    }

    const handleShowRouls = () => {
        setRouls(rouls=> (!rouls));
    }

    
  return (
    <div className='flex flex-col gap-6'>
    <div className='mr-16 py-5'>
        <p className={`text-red-500 text-end ${!show && 'hidden'}`}>You have not selected any number</p>
    </div>
        <div className='w-full flex justify-between px-16'>
            {/* score */}
            <div className='flex flex-col items-center'>
                <h1 className='text-6xl font-bold'>{score}</h1>
                <p className='text-lg font-serif'>Total Score</p>
            </div>
            {/* select number */}
            <div>
                <div className='flex text-3xl items-center gap-4'>
                     {options.map((option, ind)=> <Scour GameNumber={handelSelectNumber} selectedNum={selectedNum} key={ind} number={option}/>)}
                    </div>
                        <p className='text-end text-xl font-medium py-4'>Select Number</p>    
                    </div>
              </div>
            <div>
        </div>

        <div className='flex flex-col items-center gap-4'>
            {sprining ? <Loader />: <DiceImage setShow={setShow} setSelectedNum={setSelectedNum} scoreHandel={scoreHandel} handelDiceClick={handelDiceClick} selectedNum={selectedNum}/>}
            <p>Click on Dice to roll</p>
            <div className='flex flex-col gap-4'>
                <div><ButtonWhite>Reset Game</ButtonWhite></div>
                <div><ButtonPri onButtonClick={handleShowRouls}>{rouls ? 'Hide Rouls' :  'Show Rules'}</ButtonPri></div>
            </div>
        </div>

        {rouls && <div className='flex items-center flex-col mt-3'>
            <div className='bg-slate-200 p-4'>
                <h1 className='text-3xl font-bold mb-4'>How to play dice game</h1>
                <p className='font-mono text-2xl'>Select any number</p>
                <p className='font-mono text-2xl'>Click on dice image</p>
                <p className='font-mono text-2xl'>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
                <p className='font-mono text-2xl'>if you get wrong guess then  2 point will be dedcuted </p>
            </div>
        </div>}
    </div>
  )
}
