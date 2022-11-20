import React from "react";
import quizPair from "./quizPair.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const QuizPair = ({onFormChange, index, removePair, pair}) => {
    return (
        <div className="quiz-pair">
            <div className="quiz-pair-top">
                <p className="quiz-pair-p">{index + 1}</p>
                <FontAwesomeIcon icon={faTrashAlt} onClick = {() => removePair(index)} />
            </div>
            <div className="quiz-pair-bottom">
                <input type="text" name="word" placeholder="word" value={pair.word} onChange = {event => onFormChange(event, index)} className="quiz-pair-input" />
                <input type="text" name="translation" placeholder="translation" value={pair.translation} onChange = {event => onFormChange(event, index)} className="quiz-pair-input" />
            </div>
        </div>
    )
}

export default QuizPair;