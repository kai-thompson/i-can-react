import React from "react";

interface BookDetailsProps {
    title?: string;
    author?: string;
    description?: string;
}

const BookDetails = ({title, author, description}: BookDetailsProps) => {
    return (
        <div className="w-[50%]">
            <h1>Title: {title}</h1>
            <h2>Author: {author}</h2>
            <p>Description: {description}</p>
        </div>
    )
}

export default BookDetails