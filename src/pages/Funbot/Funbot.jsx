import React from 'react'

const Funbot = () => {
    // const message = 
    return (
        <>
            <header className='funBotHeader text-center'>
                <h1>
                    Mental Health Care Funbot
                </h1>
            </header>
            <div className="funbot">
                <input className='inputChat' type="text" placeholder='Enter Your message here' />
                
                <img className='sendIcon' src="public\images\sendIcon.png" alt="Icon" />
            </div>
        </>
    )
}

export default Funbot
