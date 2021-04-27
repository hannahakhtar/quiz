import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loader from 'react-loader-spinner'

const Quiz = ({ location }) => {

  // ? use token so local storage remembers questions already asked
  // ? tidy up the special characters

  const [loading, setLoading] = useState(true)
  const [quizData, setQuizData] = useState([])
  const [displayQuestion, setDisplayQuestion] = useState('')
  const [correctAnswer, setCorrectAnswer] = useState([])
  const [incorrectAnswers, setIncorrectAnswers] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isError, setIsError] = useState(false)
  let [score, setScore] = useState(0)


  const category = location.state.category
  const questionAmount = location.state.questionAmount

  useEffect(() => {
    async function fetchQuizData() {
      try {
        const { data } = await axios.get(`https://opentdb.com/api.php?amount=${questionAmount}&${!category ? '' : 'category'}=${category}`)
        setQuizData(data.results)
        setDisplayQuestion(data.results[0].question)
        setCorrectAnswer(data.results[0].correct_answer)
        setIncorrectAnswers(data.results[0].incorrect_answers)
        setLoading(false)
      } catch (error) {
        setIsError(true)
        setLoading(false)
      }
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
    return <Loader 
    type="Puff"
    color="#00BFFF"
    height={100}
    width={100}
    timeout={3000}
    />
  }

  if (isError) {
    return <>
    <h2>There are not enough questions available for this category.</h2>
    <Link to={{ pathname: "/quiz-app/selection" }}>Try again?</Link>
    </>
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