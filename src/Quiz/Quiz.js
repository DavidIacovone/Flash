import React from "react";
import Flashcard from "../Flashcard/Flashcard";
import quiz from "./quiz.css"

const Quiz = () => {
    return (
        <div>
            <div className="quiz-top">
                <button>Reset</button>
                <p className="quiz-p">12/20</p>
            </div>
            <div className="quiz-middle">
                <Flashcard />
            </div>
            <div className="quiz-bottom">
                <button>Check!</button>
            </div>
        </div>
    )
}

export default Quiz;