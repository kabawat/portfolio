import React, { useState, useEffect } from 'react';

const Typewriter = ({ texts, delay }) => {
    const [typedText, setTypedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timeout;

        if (currentIndex < texts.length) {
            const text = texts[currentIndex];
            const textLength = text.length;

            timeout = setTimeout(() => {
                setTypedText(text.substring(0, typedText.length + 1));

                if (typedText.length === textLength - 1) {
                    setTimeout(() => {
                        setCurrentIndex(prevIndex => prevIndex + 1);
                        setTypedText('');
                    }, 1000); // 1 second delay before moving to the next text
                }
            }, delay);
        } else {
            setCurrentIndex(0);
            setTypedText('');
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, typedText, delay, texts]);

    return <span>{typedText}</span>;
};

export default Typewriter;
