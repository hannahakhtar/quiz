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

    return <div id="allAnswers">
      {answers.sort().map((answer, i) => {
        return <Button variant="custom" key={i} id={answer} className="answerButton" onClick={() => checkAnswers(answer)}>{atob(answer)}</Button>
      })}
    </div>
  }

  function checkAnswers(answer) {
    if (currentQuestion + 1 < questionAmount) {
      if (answer === correctAnswer) {
        setScore(score + 1) 
        prepareNextQuestion()
      } else {
        prepareNextQuestion()
      }
    } else {
      setGameOver(true)
    }
  }

  function prepareNextQuestion(button) {
    setCurrentQuestion(currentQuestion + 1)
    setDisplayQuestion(quizData[currentQuestion + 1].question)
    setCorrectAnswer(quizData[currentQuestion + 1].correct_answer)
    setIncorrectAnswers(quizData[currentQuestion + 1].incorrect_answers)
  }

  function gameOverMessage() {
    if (score / questionAmount < 0.5)  {
      const lessThan50Percent = ["Well tried!", "Better luck next time!", "You gave it a good go!"]
      const randomMessage = lessThan50Percent[Math.floor(Math.random() * lessThan50Percent.length)]
      return randomMessage
    } else if (score / questionAmount >= 0.5 && score / questionAmount < 0.9) {
      const between50And80 = ["Well done, you got more than half right!", "Really good attempt - can you do better next time?!", "So close!"]
      const randomMessage = between50And80[Math.floor(Math.random() * between50And80.length)]
      return randomMessage
    } else {
      const fullMarks = ["Amazing work!", "Full marks - take a bow!!", "Quiz Pro!"]
      const randomMessage = fullMarks[Math.floor(Math.random() * fullMarks.length)]
      return randomMessage
    }
  }

  if (loading) {
    return <div id="loader">
    <Loader
      type="Circles"
      color=" #40e0d0"
      height={200}
      width={200}
      timeout={3000}
    />
    </div>
  }
  
  if (isError) {
    return <>
      <h2>There are not enough questions available for this category.</h2>
      <Link to={{ pathname: "/quiz-app/" }}><Button variant="custom">Choose again?</Button></Link>
    </>
  }

  return <div id="quiz">
    {!gameOver &&
      <Container id="quizContainer">
        <Container id="quizText">
        <h3>Question {currentQuestion + 1} of {questionAmount}</h3>
        <h3>Score: {score}</h3>
        </Container>
        <h2 id="question">{atob(displayQuestion)}</h2>
        <div>
          {displayAnswers()}
        </div>
      </Container>
    }
    {gameOver &&
      <Container id="gameOver">
        <h2 className="gameOverText">{gameOverMessage()}</h2>
        <h2 className="gameOverText">Your final score was {score} out of {questionAmount}!</h2>
        <Link to={{ pathname: "/quiz-app/" }}><Button variant="custom">Play again?</Button></Link>
        <Confetti
          width={width}
          height={height}
        />
      </Container>
    }
  </div>
}

export default Quiz