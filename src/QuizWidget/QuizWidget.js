import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import quizWidget from "../QuizWidget/quizWidget.css";

const QuizWidget = ({quiz}) => {
    return (
        <div className="widget-quiz">
            <Link to={"/create"} state={{ isUpdating: true, quiz: quiz }} ><FontAwesomeIcon className="edit" icon={faPenToSquare} /></Link>
            <FontAwesomeIcon className="delete" icon={faTrashAlt} />
            <p className="widget-p">{quiz.Title}</p>
            <button className="widget-button">Play</button>
        </div>
    )
}

export default QuizWidget;