import React, { useState } from 'react';
import Card from './Card';
import styles from './ChatAssistant.module.css';
import { FiSend } from 'react-icons/fi';

const initialMessages = [
    { id: 1, sender: 'bot', text: 'Hello! I\'m your Ocean Data Assistant. Ask me anything.' },
    { id: 2, sender: 'user', text: 'Show me the temperature profile for the float nearest to the coast of Chennai in August 2025.' },
    { id: 3, sender: 'bot', text: 'I\'ve found Float #2345 located approximately 12 nautical miles off the coast of Chennai. Here\'s the profile for August 2025:', details: 'The float shows an interesting thermal layer between 300-500m.' },
];

const ChatAssistant = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim() === '') return;
        const newUserMessage = { id: Date.now(), sender: 'user', text: input };
        setMessages([...messages, newUserMessage]);
        setInput('');
    };

    return (
        <Card title="Ocean Data Assistant" className="h-full">
            <div className={styles.chatContainer}>
                <div className={styles.chatHistory}>
                    {messages.map(msg => (
                        <div key={msg.id} className={`${styles.messageWrap} ${styles[msg.sender]}`}>
                            <div className={styles.messageBubble}>
                               <p>{msg.text}</p>
                               {msg.details && (
                                   <div className={styles.details}>
                                       <p>{msg.details}</p>
                                       <a href="#">View detailed analysis</a>
                                   </div>
                               )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.inputArea}>
                    <div className={styles.suggestionChips}>
                        {['Compare trends', 'Find nearest float', 'Show anomalies'].map(chip => (
                             <button key={chip} className={styles.chip}>{chip}</button>
                        ))}
                    </div>
                    <div className={styles.inputForm}>
                        <input
                            type="text"
                            placeholder="Ask about ocean data..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            className={styles.textInput}
                        />
                        <button onClick={handleSend} className={styles.sendButton}>
                            <FiSend size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default ChatAssistant;