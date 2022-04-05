import React,{ useState } from 'react'
import Shuffle from './Shuffle'



const Singlequestion = 
               ({question, incorrect_answers,  correct_answer, quizState, setQuizState, checkAnswers} )    => {
                const [selectedAnswer, setSelectedAnswer] = useState(null)
            
                const allAnswers = [ ...incorrect_answers, correct_answer];
                //useState to stop the constant shuffling
                const [shuffledAnswers] = useState(() => Shuffle(allAnswers))
              
               const hasPickedAnswer = selectedAnswer != null 
              
                const handleChooseAnswer = (e)=>{
                     const playerAnswer = e.target.innerHTML
                    setSelectedAnswer(playerAnswer)
                    const wasPlayerCorrect = playerAnswer === correct_answer
                  
                    if(e.target.innerHTML === correct_answer){
                        setQuizState(prevQuizState => {
                            return {
                                ...prevQuizState,
                                score:  prevQuizState.score + 1
                            }
                        })
                    }
                    else{
                        console.log('wrong')
                    }
                    
                }
               console.log(checkAnswers)
               
  return (
    <div className='singlequest'>             

<div className="question">
                <p>{question}</p>
               { checkAnswers && <p className='show'>Correct answer: {correct_answer}</p>}
            </div>
            <div className="incorrect">
                {
                   
                    shuffledAnswers.map((answer)=>{

                        let classname = "ans"

                        if(hasPickedAnswer){
                            
                            const pickedThisAnswer = answer === selectedAnswer
                            
                            if(pickedThisAnswer){
                                classname = "hold"
                            }else{
                                classname="ans"
                            }
                        }
                       
                        
                             return(
                                <button key={answer} onClick={handleChooseAnswer}
                                className={classname}
                                disabled={hasPickedAnswer || checkAnswers}>{answer}</button>
                             )
                       
                    })
                }
            </div>
          
        </div>
  )
}

export default Singlequestion