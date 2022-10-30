import React from "react";
import flashcard from "./flashcard.css";

const Flashcard = () => {
    return (
        <div className="flashcard-wrapper">
            <div className="flashcard-top">
                <p>Lorem ipsum</p>
                <p>like</p>
            </div>
            <div className="flashcard-middle">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
            </div>
            <div className="flashcard-bottom">
                <input type="text" placeholder="Answer.. " />
            </div>
        </div>
    )
}

export default Flashcard;