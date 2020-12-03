import React from "react";

const Articles = ({ posts }) => {
    return (
        <div className="container">
            {!posts.length ? (<h3 className="loading">LOADING.....</h3>
            ) : (
            posts.map((article, key) => {
                return (
                    <div key={key}>
                        <h2>{article.title}</h2>
                        <p>{article.article}</p>
                        <span className="author">{article.aurthorName}</span>
                    </div>
                );
            }))}
            
        </div>
    );
};

export default Articles;