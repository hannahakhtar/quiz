import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Quiz = ({ location }) => {

  // ? if location is undefined, take user back to home page (have button and say they need to make a selection first)
  // ? how to use token
  // ? tidy up the special characters

  const [loading, setLoading] = useState(true)
  const [quizData, setQuizData] = useState([])
  const [displayQuestion, setDisplayQuestion] = useState('')
  const [correctAnswer, setCorrectAnswer] = useState([])
  const [incorrectAnswers, setIncorrectAnswers] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  let [score, setScore] = useState(0)

  const category = location.state.category
  const questionAmount = location.state.questionAmount

  useEffect(() => {
    async function fetchQuizData() {
      const { data } = await axios.get(`https://opentdb.com/api.php?amount=${questionAmount}&${!category ? '' : 'category'}=${category}`)
      setQuizData(data.results)
      setDisplayQuestion(data.results[0].question)
      setCorrectAnswer(data.results[0].correct_answer)
      setIncorrectAnswers(data.results[0].incorrect_answers)
      setLoading(false)
    }
    fetchQuizData()
  }, [category, questionAmount])

  function displayAnswers() {
    const correct = [correctAnswer]
    const incorrect = incorrectAnswers
    const answers = correct.concat(incorrect)
    return <div>
      {answers.sort().map((answer, i) => {
        return <button key={i} onClick={() => checkAnswers(answer)}>{answer}</button>
      })}
    </div>
  }

  function checkAnswers(answer) {    
    if (currentQuestion + 1 < questionAmount) {
      if (answer === correctAnswer) {
        setScore(score + 1)
        setCurrentQuestion(currentQuestion + 1)
        setDisplayQuestion(quizData[currentQuestion + 1].question)
        setCorrectAnswer(quizData[currentQuestion + 1].correct_answer)
        setIncorrectAnswers(quizData[currentQuestion + 1].incorrect_answers)
      } else {
        setCurrentQuestion(currentQuestion + 1)
        setDisplayQuestion(quizData[currentQuestion + 1].question)
        setCorrectAnswer(quizData[currentQuestion + 1].correct_answer)
        setIncorrectAnswers(quizData[currentQuestion + 1].incorrect_answers)
      }
    } else {
        alert('game over')
        // ? show final score and confetti and button to play again which takes them back to the selection page.
    }
  }

  if (loading) {
    // ? add spinner here
    return <div>loading...</div>
  }

  return <>
    <h1>Quiz</h1>
    <div>Question {currentQuestion + 1} of {questionAmount}</div>
    <div>{displayQuestion}</div>
    <div>
      {displayAnswers()}
    </div>
    <div>Score: {score}</div>
  </>
}

export default Quiz