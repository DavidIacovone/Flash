import React from "react";
import { Link } from "react-router-dom";
import results from "./results.css";

const Results = () => {
    return (
        <div className="results">
            <h1>Great Job! Your passed this test.</h1>
            <h3>You should work on this word in particular: {JSON.parse(sessionStorage.getItem("results")).word} </h3>
            <Link to={'/'} ><button className="results-button">Play again</button></Link>
        </div>
    )
}

export default Results;