import React, {useState} from 'react';
import './Counter.css'

function Counter () {
    const [message, setMessage] = useState('');
    const [updated, setUpdated] = useState(message);

    const handleChange = (event) => {
    setMessage(event.target.value);
    let count = 0;
    for (let i = 0; i < message.length; i++) {
    if (
        message.charAt(i) === 'a' ||
        message.charAt(i) === 'e' ||
        message.charAt(i) === 'i' ||
        message.charAt(i) === 'o' ||
        message.charAt(i) === 'u'
    )
    count++;
    }
setUpdated(count);
};

    return (
        <div>
            <h1 id='head'>Vowel Counter</h1>
            <input
            id='bar'
            type="text"
            name="message"
            onChange={handleChange}
            value={message}/>
            <br/>
            <h2 id='counter'>Vowels: {updated}</h2>
        </div>
    );
}

export default Counter;
