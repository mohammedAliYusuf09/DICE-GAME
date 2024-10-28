import { useState } from "react";
import Landing from "./components/Landing"
import GamePage from "./components/GamePage";

function App() {



  const [open, setOpen] = useState('Landing'); //Landing or GamePage 

  const handelOpenPage = () => {
    setOpen('GamePage');
  }

  



  return (
    <>
    <div className="h-screen">
      {open === 'Landing' ? <Landing onButtonClick={handelOpenPage}/> : <GamePage/>}
    </div>
    </>
  )
}

export default App
