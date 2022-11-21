import React from "react";
import flashcard from "./flashcard.css";

const Flashcard = ({word, Title, onAnswerChange, answer}) => {
    return (
        <div className="flashcard-wrapper">
            <div className="flashcard-top">
                <p>{Title}</p>
                <p>like</p>
            </div>
            <div className="flashcard-middle">
                <p>{word}</p>
            </div>
            <div className="flashcard-bottom">
                <input type="text" placeholder="Answer.. " value={answer} onChange={event => onAnswerChange(event)} />
            </div>
        </div>
    )
}

export default Flashcard;