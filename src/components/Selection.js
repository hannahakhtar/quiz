import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Selection = () => {

  // ? have button disabled until user has chosen the category and question amount.

  const [category, setCategory] = useState('')
  const [questionAmount, setQuestionAmount] = useState('')

  return <>
    <h1>Choose your category and difficulty</h1>
    <label>Choose a category</label>
    <select name="selection" id="selection" onChange={e => setCategory(e.target.value)}>
      <option disable="true" >Choose a category...</option>
      <option value="27">Animals</option>
      <option value="25">Art</option>
      <option value="26">Celebrities</option>
      <option value="16">Entertainment: Board Games</option>
      <option value="10">Entertainment: Books</option>
      <option value="32">Entertainment: Cartoons & Animations</option>
      <option value="29">Entertainment: Comics</option>
      <option value="11">Entertainment: Film</option>
      <option value="31">Entertainment: Japanese Anime & Manga</option>
      <option value="12">Entertainment: Music</option>
      <option value="13">Entertainment: Musicals & Theatres</option>
      <option value="14">Entertainment: Television</option>
      <option value="15">Entertainment: Video Games</option>
      <option value="9">General Knowledge</option>
      <option value="22">Geography</option>
      <option value="23">History</option>
      <option value="20">Mythology</option>
      <option value="24">Politics</option>
      <option value="">Random</option>
      <option value="17">Science & Nature</option>
      <option value="18">Science: Computers</option>
      <option value="19">Science: Mathematics</option>
      <option value="30">Science: Gadgets</option>
      <option value="21">Sports</option>
      <option value="28">Vehicles</option>
    </select>
    <label id="numberOfQuestions">Choose the number of questions</label>
    <select onChange={e => setQuestionAmount(e.target.value)}>
    <option disable="true" >Choose number of questions...</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
      <option value="25">25</option>
    </select>
    <Link to={{
      pathname: "/quiz-app/play",
      state: { category, questionAmount }
    }}>Play!</Link>
  </>
}

export default Selection