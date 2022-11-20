import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import quizWidget from "../QuizWidget/quizWidget.css";

const QuizWidget = ({Title}) => {
    return (
        <div className="widget-quiz">
            <FontAwesomeIcon className="edit" icon={faPenToSquare} />
            <FontAwesomeIcon className="delete" icon={faTrashAlt} />
            <p className="widget-p">{Title}</p>
            <button className="widget-button">Play</button>
        </div>
    )
}

export default QuizWidget;