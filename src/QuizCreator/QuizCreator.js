import React, { useState } from "react";
import QuizPair from "../QuizPair/QuizPair";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import quizCreator from "./quizCreator.css"

const QuizCreator = () => {
    const [pairs, setPairs] = useState([{
        word: "",
        translation: ""
    }]);

    const addPair = () => {
        let pair = {
            word: '',
            translation: ''
        }

        setPairs([...pairs, pair]);
    }


    return (
        <div className="quiz-creator">
            <Link to={"/"} ><FontAwesomeIcon className="quiz-creator-icon" icon={faArrowLeft} /></Link>
            <div className="quiz-creator-top">
                <h3 className="quiz-creator-h3">Create a new quiz</h3>
                <button>Create</button>
            </div>
            <input className="quiz-creator-input" type="text" placeholder="Title.. " />
            <div className="quiz-creator-pairs">
                <form>
                    {pairs.map( (pair, index) => {
                        return <QuizPair key={index} props={pair} />
                    })}
                </form>
            </div>
            <button onClick={addPair}>+</button>
        </div>
    )
}

export default QuizCreator;