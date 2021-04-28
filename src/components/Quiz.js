import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Quiz = ({ location }) => {

  const [loading, setLoading] = useState(true)
  const [quizData, setQuizData] = useState([])
  const [displayQuestion, setDisplayQuestion] = useState('')
  const [correctAnswer, setCorrectAnswer] = useState([])
  const [incorrectAnswers, setIncorrectAnswers] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isError, setIsError] = useState(false)
  const [score, setScore] = useState(0)
  const [show, setShow] = useState(false)

  const category = location.state.category
  const questionAmount = location.state.questionAmount
  const { width, height } = useWindowSize()

  useEffect(() => {
    async function fetchQuizData() {
      try {
        const { data } = await axios.get(`https://opentdb.com/api.php?amount=${questionAmount}&${!category ? '' : 'category'}=${category}&encode=base64`)
        setQuizData(data.results)
        setDisplayQuestion(data.results[0].question)
        setCorrectAnswer(data.results[0].correct_answer)
        setIncorrectAnswers(data.results[0].incorrect_answers)
        setLoading(false)
        // ? if error is becuase of one of the response calls (to do with questions or token), action and then call function again?
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
        return <Button key={i} onClick={() => checkAnswers(answer)}>{atob(answer)}</Button>
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
      setShow(true)
    }
  }

  if (loading) {
    return <Loader
      type="Circles"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  }

  if (isError) {
    return <>
      <h2>There are not enough questions available for this category.</h2>
      <Link to={{ pathname: "/quiz-app/selection" }}><Button>Try again?</Button></Link>
    </>
  }

  return <>
    <h1>Quiz</h1>
    <div>Question {currentQuestion + 1} of {questionAmount}</div>
    <div>Score: {score}</div>
    <div>{atob(displayQuestion)}</div>
    <div>
      {displayAnswers()}
    </div>

    <Modal show={show}>
      <Modal.Body>
        <p>Your final score was {score}</p>
        <Link to={{ pathname: "/quiz-app/selection" }}><Button>Play again?</Button></Link>
      </Modal.Body>
    </Modal>
    {show &&
      <Confetti
        width={width}
        height={height}
        />}
  </>
}

export default Quiz