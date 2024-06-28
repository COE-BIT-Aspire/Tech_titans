import { useState } from "react";

function BookDetails() {
    // const [title, changeTitle] = useState('To Kill a Mockingbird');
    // const [author, changeAuthor] = useState('Harper Lee');
    // const [genre, changeGenre] = useState('Classic');
    // const [year, changeYear] = useState('1960');

    const [details, changeDet] = useState({
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        genre: 'Classic',
        year: 1960
    });

    return (
        <div>
            <h1>Current book details are:</h1>
            <p>Title: {details.title}</p>
            <p>Author: {details.author}</p>
            <p>Genre: {details.genre}</p>
            <p>PublishedYear: {details.year}</p>
            <button onClick={()=>changeDet(previousState=>({...previousState, year:"1980"}))}>Click here</button>
        </div>
    );
}

export default BookDetails;