import { useState } from "react";

function Mirror() {
    const [actualContent, setContent] = useState('');
    
    const captureTyping = (event) => {
        setContent(event.target.value)
    }
    // ou...
    const [count, setCount] = useState('');

    return (
        <div>
            <textarea value={actualContent} onChange={captureTyping}></textarea>
            <p>{actualContent}</p>
{/* ou... */}
            <textarea id="textarea" onChange={() => setCount(document.getElementById('textarea').value)}></textarea>
            <p>{count}</p>
        </div>
    )
}

export default Mirror