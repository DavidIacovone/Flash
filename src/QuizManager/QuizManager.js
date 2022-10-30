import React from "react";
import quizManager from "./quizManager.css"
import Quiz from "../Quiz/Quiz";
import QuizList from "../QuizList/QuizList";

const QuizManager = () => {
    return (
        <div className="quiz-manager">
            <QuizList />
            <Quiz />
        </div>
    )
}

export default QuizManager;