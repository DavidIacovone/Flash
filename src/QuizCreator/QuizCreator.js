import React from "react";
import QuizPair from "../QuizPair/QuizPair";
import quizCreator from "./quizCreator.css"

const QuizCreator = () => {
    return (
        <div className="quiz-creator">
            <div className="quiz-creator-top">
                <h3 className="quiz-creator-h3">Create a new quiz</h3>
                <button className="quiz-creator-button">Create</button>
            </div>
            <input className="quiz-creator-input" type="text" placeholder="Title.. " />
            <div className="quiz-creator-pairs">
                <QuizPair />
            </div>
            <button>+</button>
        </div>
    )
}

export default QuizCreator;