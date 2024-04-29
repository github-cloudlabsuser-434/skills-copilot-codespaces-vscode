import React, {useState} from "react";
import ReactMarkdown from "react-markdown";

function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleInputChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleInputChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
}



function reverseAndCapitalize(sentence) {
    const reversedSentence = sentence.split('').reverse().join('');
    const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
    return capitalizedSentence;
}

const reversedAndCapitalized = reverseAndCapitalize('type markdown here');
console.log(reversedAndCapitalized);
export default MarkdownEditor;


