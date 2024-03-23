import React, { useState, useEffect } from "react";
import styles from "../../styles/modules/HeaderBasic.module.scss";

const Typewriter = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let timeoutId;

        const typeNextCharacter = (currentIndex) => {
            if (currentIndex === text.length) {
                return;
            }

            timeoutId = setTimeout(() => {
                setDisplayedText((prevText) => prevText + text[currentIndex]);
                typeNextCharacter(currentIndex + 1);
            }, speed);
        };

        typeNextCharacter(0);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [text, speed]);

    return <h1 id="title">{displayedText}</h1>;
};

export default Typewriter;
