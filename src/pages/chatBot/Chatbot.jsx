// import React, { useState } from 'react';
// import SendIcon from '@mui/icons-material/Send';

// const Funbot = () => {
//     const [currentMessage, setCurrentMessage] = useState('');
//     const [messages, setMessages] = useState([]);

//     async function sendMessage(event) {
//         if (!currentMessage.trim()) return; // Don't send empty messages

//         try {
//             const userMessage = { type: 'user', text: currentMessage.trim() };
//             setMessages(prevMessages => [...prevMessages, userMessage]);

//             // Send user message to server and receive response
//             const response = await fetch('https://mybandhubot1.onrender.com/predict', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ "pattern": currentMessage }) // Use 'pattern' instead of 'message'
//             });

//             if (!response.ok) {
//                 console.error('Failed to fetch response from the server');
//                 return;
//             }

//             const { answer, emotion } = await response.json();

//             // Update the message state with the system response
//             setTimeout(() => {
//                 setMessages(prevMessages => [
//                     ...prevMessages,
//                     { type: 'system', text: `${answer} [${emotion}]` } // Adding emotion to the system response
//                 ]);
//             }, 500);
//         } catch (error) {
//             console.error('Error sending message:', error);
//         }
//         setCurrentMessage('');
//         if (event) event.preventDefault();
//     }

//     function handleChange(event) {
//         setCurrentMessage(event.target.value);
//     }

//     const handleKeyDown = (event) => {
//         if (event && event.key === 'Enter') {
//             event.preventDefault();
//             sendMessage();
//         }
//     };

//     return (
//         <>
//             <header className='funBotHeader text-center'>
//                 <h1>Mental Health Care Funbot</h1>
//             </header>
//             <main className='chat-container'>
//                 <div className="funbot">
//                     <div className='message-container'>
//                         {messages.map((msg, index) => (
//                             <div key={index} className={`message ${msg.type}`}>
//                                 {msg.text}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="input">
//                     <input
//                         className='inputChat'
//                         type="text"
//                         placeholder='Enter Your message here'
//                         value={currentMessage}
//                         onChange={handleChange}
//                         onKeyDown={handleKeyDown}
//                     />
//                     <button onClick={sendMessage}>
//                         <SendIcon className='sendIcon' />
//                     </button>
//                 </div>
//             </main>
//         </>
//     );
// }

// export default Funbot;


import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

const Chatbot = () => {
    const [currentMessage, setCurrentMessage] = useState('');
    const [messages, setMessages] = useState([]);

    async function sendMessage(event) {
        if (!currentMessage.trim()) return; // Don't send empty messages

        try {
            const userMessage = { type: 'user', text: currentMessage.trim() };
            setMessages(prevMessages => [...prevMessages, userMessage]);

            // Send user message to server and receive response
            const response = await fetch('https://mybandhubot1.onrender.com/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "pattern": currentMessage }) // Use 'pattern' instead of 'message'
            });

            if (!response.ok) {
                console.error('Failed to fetch response from the server');
                return;
            }

            const { answer, emotion } = await response.json();

            setMessages(prevMessages => [
                ...prevMessages,
                { type: 'system', text: `${answer} [${emotion}]` }
            ]);
        } catch (error) {
            console.error('Error sending message:', error);
        }
        setCurrentMessage('');
        if (event) event.preventDefault();
    }

    function handleButtonClick(answer) {
        if (answer === 'Yes') {
            const lastSystemMessage = messages[messages.length - 1];
            setCurrentMessage(`${lastSystemMessage.text} Yes`);
        } else {
            setCurrentMessage(answer);
        }
        sendMessage();
    }

    function handleChange(event) {
        setCurrentMessage(event.target.value);
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
                <h1>Mental Health Care Funbot</h1>
            </header>
            <main className='chat-container' > {/* Adding margin bottom */}
                <div className="funbot">
                    <div className='message-container'>
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.type}`}>
                                {msg.text}
                                {msg.type === 'system' && (
                                    <div>
                                        <button onClick={() => handleButtonClick('Yes')}>Yes</button>
                                        <button onClick={() => handleButtonClick('No')}>No</button>
                                    </div>
                                )}
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
                    <button onClick={sendMessage} className='sendButton'>
                        <SendIcon className='sendIcon' />
                    </button>
                </div>
            </main>
        </>
    );
}

export default Chatbot;
