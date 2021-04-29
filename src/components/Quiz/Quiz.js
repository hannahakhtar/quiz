import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Quiz = ({ location }) => {

  const [loading, setLoading] = useState(true)
  const [quizData, setQuizData] = useState([])
  const [displayQuestion, setDisplayQuestion] = useState('')
  const [correctAnswer, setCorrectAnswer] = useState([])
  const [incorrectAnswers, setIncorrectAnswers] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isError, setIsError] = useState(false)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  // ? if user goes to app/play from url bar, they will have error because cat/question are unifned
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

    return <div className="allAnswers">
      {answers.sort().map((answer, i) => {
        return <Button key={i} className="answerButton" onClick={() => checkAnswers(answer)}>{atob(answer)}</Button>
      })}
    </div>
  }

  // ? if answer is correct, turn green. If answer is wrong, turn the clicked one red and the right answer green. After one second, do everything else.
  // ? why is the button staying as clicked, even when the next question displays?

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
      setGameOver(true)
    }
  }

  if (loading) {
    return <div id="loader">
    <Loader
      type="Circles"
      color="#00BFFF"
      height={200}
      width={200}
      timeout={3000}
    />
    </div>
  }

  if (isError) {
    return <>
      <h2>There are not enough questions available for this category.</h2>
      <Link to={{ pathname: "/quiz-app/" }}><Button>Choose again?</Button></Link>
    </>
  }

  return <div id="quiz">
    {!gameOver &&
      <Container id="quizContainer">
        <h2>Question {currentQuestion + 1} of {questionAmount}</h2>
        <h2>Score: {score}</h2>
        <div>{atob(displayQuestion)}</div>
        <div>
          {displayAnswers()}
        </div>
      </Container>
    }
    {gameOver &&
      <Container id="gameOver">
        <p>Congratulations!</p>
        <p>Your final score was {score}</p>
        <Link to={{ pathname: "/quiz-app/" }}><Button>Play again?</Button></Link>
        <Confetti
          width={width}
          height={height}
        />
      </Container>
    }
  </div>
}

export default Quiz