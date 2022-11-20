import React, { useEffect, useState } from "react";
import QuizPair from "../QuizPair/QuizPair";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { db } from "../firebaseConfig";
import { addDoc, updateDoc, doc,  collection } from "firebase/firestore";
import quizCreator from "./quizCreator.css";

const QuizCreator = () => {
    const [pairs, setPairs] = useState([{
        id: Math.random(),
        word: '',
        translation: ''
    }]);
    const [Title, setTitle] = useState('');
    const quizzesCollectionRef = collection(db, "Quizzes");
    const location = useLocation();
    const { isUpdating } = location.state;
    const { quiz } = location.state;

    useEffect(() => {
        if (isUpdating) {
            setTitle(quiz.Title)
            setPairs(quiz.Flashcards);
        }
    }, [])

    const addPair = () => {
        let pair = {
            id: Math.random(),
            word: '',
            translation: ''
        }

        setPairs([...pairs, pair]);
    }

    const removePair = (index) => {
        let data = [...pairs];
        data.splice(index, 1)
        setPairs(data)
    }

    const onFormChange = (event, index) => {
        let data = [...pairs];
        data[index][event.target.name] = event.target.value;
        setPairs(data);
    }

    const submit = async () => {
        await addDoc(quizzesCollectionRef, { Title: Title, Flashcards: pairs });
        window.location.reload(true);
    }

    const update = async () => {
        await updateDoc(doc(db, "Quizzes", quiz.id), { Title: Title, Flashcards: pairs });
        alert("Quiz updated");
    }


    return (
        <div className="quiz-creator">
            <Link to={"/"} ><FontAwesomeIcon className="quiz-creator-icon" icon={faArrowLeft} /></Link>
            <div className="quiz-creator-top">
                <h3 className="quiz-creator-h3">Create a new quiz</h3>
                {
                    isUpdating ? <button onClick={update} >Update</button> : <button onClick={submit} >Create</button>
                }
            </div>
            <input className="quiz-creator-input" type="text" placeholder="Title.. " value={Title} onChange={event => setTitle(event.target.value)} />
            <div className="quiz-creator-pairs">
                <form>
                    {pairs.map( (pair, index) => {
                        return <QuizPair key={pair.id} pair = {pair} onFormChange = {onFormChange} removePair = {removePair} index = {index} />
                    })}
                </form>
            </div>
            <button onClick={addPair}>+</button>
        </div>
    )
}

export default QuizCreator;