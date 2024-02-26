import React from 'react'

function Book(props) {
    if(props.bookId <= 0){
        throw new Error("BookId should be > 0");
    }
    return (
        <div>
            <h1>Book Name:{props.bookName}</h1>
        </div>
    )
}

export default Book
