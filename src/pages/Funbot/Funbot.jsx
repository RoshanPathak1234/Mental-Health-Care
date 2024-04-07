import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
const Funbot = () => {
    const [currentMessage, setCurrentMessage] = useState('');
    const [message, setMessage] = useState([]);
    async function sendMessage(event) {
        if (!currentMessage.trim()) return; // Don't send empty messages

        try {
            const userMessage = { type: 'user', text: currentMessage.trim() };
            setMessage(prevMessages => [...prevMessages, userMessage]);

            // Send user message to server and receive response
            // const response = await fetch('YOUR_API_ENDPOINT', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({ message: currentMessage.trim() })
            // });

            // if (!response.ok) {
            //     console.error('Failed to fetch response from the server');
            //     return;
            // }

           // let { response: systemResponse } = await response.json();
            console.log(currentMessage);

            // setMessage(prevMessages => [
            //     ...prevMessages,
            //     { type: 'user', text: currentMessage },
            // ]);


            let systemResponse = ' hello from system';

            setTimeout(() => {
                setMessage(prevMessages => [
                    ...prevMessages,
                    { type: 'system', text: systemResponse }
                ]);
            }, 500);
        } catch (error) {
            console.error('Error sending message:', error);
        }
        setCurrentMessage('');
        if (event) event.preventDefault();
    }
    function handleChange(event) {
        setCurrentMessage(event.target.value);
        // console.log(currentMessage);
    }
    const handleKeyDown = (event) => {
        if (event && event.key === 'Enter') {
            event.preventDefault();
            sendMessage();
        }
    };
    return (
        <>
            <header className='funBotHeader text-center'>
                <h1>
                    Mental Health Care Funbot
                </h1>
            </header>
            <main className='chat-container'>
                <div className="funbot">
                    <div className='message-container'>
                        {message.map((msg, index) => (
                            <div key={index} className={`message ${msg.type}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="input">
                    <input
                        className='inputChat'
                        type="text"
                        placeholder='Enter Your message here'
                        value={currentMessage}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                    <button onClick={sendMessage}>
                        <SendIcon className='sendIcon' />
                    </button>
                </div>
            </main >
        </>
    )
}

export default Funbot
