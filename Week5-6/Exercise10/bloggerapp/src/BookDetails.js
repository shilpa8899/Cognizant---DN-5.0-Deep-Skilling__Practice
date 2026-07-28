import React from "react";

function BookDetails() {

    const books = [
        {
            id: 1,
            name: "React Basics",
            author: "John"
        },
        {
            id: 2,
            name: "JavaScript ES6",
            author: "David"
        },
        {
            id: 3,
            name: "Node.js Guide",
            author: "Robert"
        }
    ];


    return (
        <div>

            <h2>Book Details</h2>

            {
                books.map(book => (
                    <div key={book.id}>
                        <p>
                            Book Name: {book.name}
                        </p>

                        <p>
                            Author: {book.author}
                        </p>

                        <hr />
                    </div>
                ))
            }

        </div>
    );
}

export default BookDetails;