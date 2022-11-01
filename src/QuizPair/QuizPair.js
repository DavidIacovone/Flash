import React from "react";
import quizPair from "./quizPair.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const QuizPair = () => {
    return (
        <div className="quiz-pair">
            <div className="quiz-pair-top">
                <p className="quiz-pair-p">1</p>
                <FontAwesomeIcon icon={faTrashAlt} />
            </div>
            <div className="quiz-pair-bottom">
                <input type="text" placeholder="word" className="quiz-pair-input" />
                <input type="text" placeholder="translation" className="quiz-pair-input" />
            </div>
        </div>
    )
}

export default QuizPair;