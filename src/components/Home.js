import React, { useState }from 'react'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';


const Home = () => {

  const [categoryKey, setCategoryKey] = useState('')
  const [questionAmount, setQuestionAmount] = useState('')
  const [categoryName, setCategoryName] = useState('')

  function handleCategorySelect(eventKey, e) {
    setCategoryKey(eventKey)
    console.log(eventKey)
    setCategoryName(e.target.outerText)
  }

  function handleQuestionAmountSelect(e, eventKey) {
    setQuestionAmount(e)
  }

  return <>
    <h1>Home</h1>
    <p>Choose from a number of different categories and the number of questions you want to have.</p>
    <p>Good luck!</p>
    <Dropdown>
      <Dropdown.Toggle id="categoryDropdown">
      Category
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <Dropdown.Item onSelect={handleCategorySelect} eventKey="27">Animals</Dropdown.Item>
      <Dropdown.Item onSelect={handleCategorySelect} eventKey="25">Art</Dropdown.Item>
      <Dropdown.Item onSelect={handleCategorySelect} eventKey="26">Celebrities</Dropdown.Item>
      <Dropdown.Item onSelect={handleCategorySelect} eventKey="16">Entertainment: Board Games</Dropdown.Item>
      <Dropdown.Item onSelect={handleCategorySelect} eventKey="10">Entertainment: Books</Dropdown.Item>
      <Dropdown.Item onSelect={handleCategorySelect} eventKey="32">Entertainment: Cartoons & Animations</Dropdown.Item>
      <Dropdown.Item onSelect={handleCategorySelect} eventKey="29">Entertainment: Comics</Dropdown.Item>
      <Dropdown.Item onSelect={handleCategorySelect} eventKey="11">Entertainment: Film</Dropdown.Item>
      <Dropdown.Item onSelect={handleCategorySelect} eventKey="31">Entertainment: Japanese Anime & Manga</Dropdown.Item>
      <Dropdown.Item onSelect={handleCategorySelect} eventKey="12">Entertainment: Music</Dropdown.Item>
      <Dropdown.Item onSelect={handleCategorySelect} eventKey="13">Entertainment: Musicals & Theatres</Dropdown.Item>
      <Dropdown.Item onSelect={handleCategorySelect} eventKey="14">Entertainment: Television</Dropdown.Item>
      <Dropdown.Item onSelect={handleCategorySelect} eventKey="15">Entertainment: Video Games</Dropdown.Item>
      <Dropdown.Item onSelect={handleCategorySelect} eventKey="9">General Knowledge</Dropdown.Item>
      <Dropdown.Item onSelect={handleCategorySelect} eventKey="22">Geography</Dropdown.Item>
      <Dropdown.Item onSelect={handleCategorySelect} eventKey="23">History</Dropdown.Item>
      <Dropdown.Item onSelect={handleCategorySelect} eventKey="20">Mythology</Dropdown.Item>
      <Dropdown.Item onSelect={handleCategorySelect} eventKey="24">Politics</Dropdown.Item>
      <Dropdown.Item onSelect={handleCategorySelect} eventKey="">Random</Dropdown.Item>
      <Dropdown.Item onSelect={handleCategorySelect} eventKey="17">Science & Nature</Dropdown.Item>
      <Dropdown.Item onSelect={handleCategorySelect} eventKey="18">Science: Computers</Dropdown.Item>
      <Dropdown.Item onSelect={handleCategorySelect} eventKey="19">Science: Mathematics</Dropdown.Item>
      <Dropdown.Item onSelect={handleCategorySelect} eventKey="30">Science: Gadgets</Dropdown.Item>
      <Dropdown.Item onSelect={handleCategorySelect} eventKey="21">Sports</Dropdown.Item>
      <Dropdown.Item onSelect={handleCategorySelect} eventKey="28">Vehicles</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
      <Dropdown.Toggle id="questionNumberDropdown">
        Number of questions
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <Dropdown.Item onSelect={handleQuestionAmountSelect} eventKey="10">10</Dropdown.Item>
      <Dropdown.Item onSelect={handleQuestionAmountSelect} eventKey="15">15</Dropdown.Item>
      <Dropdown.Item onSelect={handleQuestionAmountSelect} eventKey="20">20</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    {categoryKey && questionAmount && 
    <>
    <p>You've chosen {questionAmount} questions from the "{categoryName}" category!</p>
    <Link to={{
      pathname: "/quiz-app/play",
      state: { categoryKey, questionAmount }
    }}><Button variant="primary">Play!</Button></Link>
    </>
  } 
  </>



}

export default Home