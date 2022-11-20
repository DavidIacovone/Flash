import React, { useEffect, useState } from "react";
import QuizWidget from "../QuizWidget/QuizWidget";
import { Link } from "react-router-dom";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import quizList from "./quizList.css"

const QuizList = () => {
    const [quizzes, setQuizzes] = useState([]);
    const quizzesCollectionRef = collection(db, "Quizzes");

    useEffect(() => {
        const getQuizzes = async () => {
            const data = await getDocs(quizzesCollectionRef);
            setQuizzes(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getQuizzes();
    }, [])

    return (
        <div className="list">
            <p className="list-p">Choose your quiz</p>
            {quizzes.map(quiz => {
                return <QuizWidget key={quiz.id} quiz={quiz} />
            })}
            <Link to={"/create"} state={{ isUpdating: false }} ><button className="list-button">Add Quiz</button></Link>
        </div>
    )
}

export default QuizList;