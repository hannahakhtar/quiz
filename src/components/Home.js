import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return <>
<h1>Home</h1>
<Link to={{
  pathname: "/quiz-app/selection",
}}>Play!</Link>
</>
}

export default Home

// * To add:
// * Mobile
// * Testing
// * Local Storage
// * accessibility?
