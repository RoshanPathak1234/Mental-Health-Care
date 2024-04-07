import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <>
      <div className='hero  text-center '>
        <h2>Express Your Feeling .. </h2>
        <h1>Get Mental Health check Up</h1>
      </div>
      <div className="buttons text-center">
        <Link to="/Funbot" >
          <button className="mood button" type="button">Mood</button>
        </Link>
        <Link to="/Chatbot" >
        <button className="Health button" type="button">Health</button>
         </Link>

      </div>
    </>
  )
}

export default HeroSection
