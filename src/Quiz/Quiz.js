import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import Flashcard from "../Flashcard/Flashcard";
import quiz from "./quiz.css"

const Quiz = () => {
    const [answer, setAnswer] = useState('');
    const [index, setIndex] = useState(0);
    const [quiz, setQuiz] = useState({ Flashcards: [{word: '', translation: '', id: 0}], Title: '', id: '' })
    const [correctAnswers, setCorrectAnswers] = useState([]);
    const [wrongAnswers, setWrongAnswers] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("currentQuiz") !== null) {
            setQuiz(JSON.parse(localStorage.getItem("currentQuiz")));
            setIndex(Math.floor(Math.random() * quiz.Flashcards.length));
        }
    }, [])

    const onAnswerChange = (event) => {
        setAnswer(event.target.value);
    }

    const onCorrectAnswer = () => {
        quiz.Flashcards.splice(index, 1);
        setQuiz(quiz);
        setIndex(Math.floor(Math.random() * quiz.Flashcards.length));
    }

    const check = () => {
        if(quiz.Flashcards[index].translation === answer) {
            correctAnswers.push(quiz.Flashcards[index]);
            setCorrectAnswers(correctAnswers);
            if (quiz.Flashcards.length > 1){
                onCorrectAnswer();
            } else {
                window.location.href = window.location.href + 'results';
            }
        }
        else {
            wrongAnswers.push(index);
            setWrongAnswers(wrongAnswers);
            setIndex(Math.floor(Math.random() * quiz.Flashcards.length));
        }
    }


    return (
        <div className="quiz">
            <div className="quiz-top">
                <button>Reset</button>
                <p className="quiz-p">{`${correctAnswers.length}/${correctAnswers.length + quiz.Flashcards.length}`}</p>
            </div>
            <div className="quiz-middle">
                <div className="flashcard-wrapper">
                    <div className="flashcard-top">
                        <p>{quiz.Title}</p>
                        <p>like</p>
                    </div>
                    <div className="flashcard-middle">
                        <p>{quiz.Flashcards[index].word}</p>
                    </div>
                    <div className="flashcard-bottom">
                        <input type="text" placeholder="Answer.. " value={answer} onChange={event => onAnswerChange(event)} />
                    </div>
                </div>
            </div>
            <div className="quiz-bottom">
                <button onClick={check} >Check!</button>
            </div>
        </div>
    )
}

export default Quiz;