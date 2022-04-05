import React, { useEffect, useState } from 'react'
import Singlequestion from './Singlequestion'
import Endquiz from './Endquiz'
import PropagateLoader from "react-spinners/PropagateLoader";
import { motion } from "framer-motion"
import he from "he"


const Question = ({handleShowQuestion}) => {

    const [questions, setQuestions] = useState([])
    const [quizState, setQuizState] = useState({
        score: 0,
        isGameOver: false
    })
    const [checkAnswers, setCheckAnswers] = useState(false)

    const {score} = quizState
  const quizIndex = questions.length

  const onCheckAnswers = () =>{
    setCheckAnswers(true)
    setQuizState(prevState => {
        return {
            score: prevState.score,
        isGameOver: true
        }
    })
  }

  const onPlayAgain = () =>{
       setQuizState({
           score: 0,
           isGameOver: false
       })
  }

  //for the singlequestion
 

const url = "https://opentdb.com/api.php?amount=10&difficulty=easy"

const getQuestions = async () =>{
    const response = await fetch(url);
    const data = await response.json()
   setQuestions(data.results.map((item)=>{
           return{
               ...item, 
               question: he.decode(item.question),
               correct_answer: he.decode(item.correct_answer),
               incorrect_answers: item.incorrect_answers.map(incorrect => he.decode(incorrect))
           };
   }))
}

    useEffect(() =>{
             getQuestions()
    }, [])
  return (
      <div className="questions">
         
          {questions.length ?

          <div className="overall">
               <div className="cancel" onClick={handleShowQuestion}>
              <div className="cancel__up"></div>
                <div className="cancel__bottom"></div>
          </div>
                {questions.map((question => (
                 <motion.div 
                 initial={{ scale: 0 }}
                 animate={{ rotate: 360, scale: 1 }}
                 transition={{
                   type: "spring",
                   stiffness: 260,
                   damping: 20,
                   default: { duration: 1 },
                 }}
                 className="quest" key={question.correct_answer}>
                     
                     <Singlequestion 
                      question={question.question}
                      incorrect_answers = {question.incorrect_answers}
                      correct_answer={question.correct_answer}
                      category={question.category}
                      quizState = {quizState}
                      setQuizState={setQuizState}
                      checkAnswers={checkAnswers}
                      />
                 </motion.div>
             ))) }
             <button className="btn" onClick={onCheckAnswers }>Check Score</button>

          </div> : <PropagateLoader color={"rgba(249, 211, 180, 1)"}   size={30} /> }

          

          {
              checkAnswers && <Endquiz  score={score} quizIndex={quizIndex} onPlayAgain={onPlayAgain }/>
          }
      </div>
   
  )
}


export default Question