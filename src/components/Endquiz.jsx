import React, { useState } from 'react'
import Confetti from 'react-confetti'


const Endquiz = ({score, quizIndex, onPlayAgain}) => {
    //const [secondLoading, setSecondLoading] = useState(false)


  return (
    <div className='endquiz'>
      
{
    score > 7 ?  <h1>Beautiful Result</h1> : <h1>Too Bad, Try again </h1>
}
<div className="score">
<p className='endquiz__p'>You Got {score} </p>
      <span className='endquiz__span'> out of  </span>
     <p className='endquiz__pp'>{quizIndex}</p>
</div>
    
     

    {
        score > 7 && <Confetti wind={0.09} />
    }
   
        </div>
    
  )
}

export default Endquiz