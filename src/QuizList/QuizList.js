import React from "react";
import QuizWidget from "../QuizWidget/QuizWidget";
import { Link } from "react-router-dom";
import quizList from "./quizList.css"

const QuizList = () => {
    return (
        <div className="list">
            <p className="list-p">Choose your quiz</p>
            <QuizWidget />
            <QuizWidget />
            <Link to={"/create"} ><button className="list-button">Add Quiz</button></Link>
        </div>
    )
}

export default QuizList;