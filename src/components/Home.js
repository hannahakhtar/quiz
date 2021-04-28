import React from 'react'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';

const Home = () => {
  return <>
<h1>Home</h1>
<p>Choose from a number of different categories and the number of questions you want to have.</p>
<p>Good luck!</p>
<Link to={{
  pathname: "/quiz-app/selection",
}}><Button variant="primary">Play!</Button></Link>
</>
}

export default Home