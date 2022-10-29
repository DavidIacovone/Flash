import React from "react";
import Flashcard from "../Flashcard/Flashcard";

const Quiz = () => {
    return (
        <div>
            <div className="quiz-top">
                <select></select>
                <p>12/20</p>
            </div>
            <div className="quiz-middle">
                <Flashcard />
                <input />
            </div>
            <div className="quiz-bottom">
                <button>Check!</button>
            </div>
        </div>
    )
}

export default Quiz;