import React from "react";
import QuizWidget from "../QuizWidget/QuizWidget";
import quizList from "./quizList.css"

const QuizList = () => {
    return (
        <div className="list">
            <p className="list-p">Choose your quiz</p>
            <QuizWidget />
            <QuizWidget />
            <button className="list-button">Add Quiz</button>
        </div>
    )
}

export default QuizList;