import React from "react";
import { Link } from "react-router-dom";
import { db } from "../firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import quizWidget from "../QuizWidget/quizWidget.css";

const QuizWidget = ({quiz}) => {

    const deleteQuiz = async () => {
        await deleteDoc(doc(db, "Quizzes", quiz.id));
        window.location.reload(true);
    }

    const play = () => {
        localStorage.setItem('currentQuiz', JSON.stringify(quiz));
        window.location.reload(true);
    }

    return (
        <div className="widget-quiz">
            <Link to={"/create"} state={{ isUpdating: true, quiz: quiz }} ><FontAwesomeIcon className="edit" icon={faPenToSquare} /></Link>
            <FontAwesomeIcon className="delete" icon={faTrashAlt} onClick={deleteQuiz} />
            <p className="widget-p">{quiz.Title}</p>
            <button className="widget-button" onClick={play} >Play</button>
        </div>
    )
}

export default QuizWidget;