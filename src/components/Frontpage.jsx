import React, {useState} from 'react'
import Question from './Question'
import { motion } from "framer-motion"

const Frontpage = ({loading, setLoading}) => {
    const [showQuestions, setShowQuestions] = useState(false)

    const handleShowQuestion = () => {
        setShowQuestions(prevState => !prevState)
    }

  return (
    <motion.div 
    initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
      default: { duration: 1 },
    }}
    className='frontpage'>
        <h1 className='frontpage__header'>Heads Up!!</h1>
        <p  className='frontpage__sub'>Test your intelligence</p>
        <p className='frontpage__sub'>Your First Choice Is Final</p>
        <button className='btn' onClick={handleShowQuestion}>Start Quiz</button>
  {showQuestions ? <Question handleShowQuestion={handleShowQuestion} 
  loading={loading}
  setLoading={setLoading}
  /> : " "}
    </motion.div>
  )
}

export default Frontpage