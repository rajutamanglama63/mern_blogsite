import React, { useState } from "react";
import axios from "axios";

const AddArticle = () => {
    const [ aurthorName, setAurthorName ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ article, setArticle ] = useState("");

    const handleAuther = (e) => {
        setAurthorName(e.target.value);
    };

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleArticle = (e) => {
        setArticle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const articles = {
            aurthorName,
            title,
            article
        };

        setAurthorName("");
        setTitle("");
        setArticle("");

        axios
            .post("http://localhost:8080/api/articles/add", articles)
            .then(res => console.log(res.data))
            .catch(err => {
                console.log(err);
            });

    };


    return (
        <>
            <div className="container container-form">
                <h2 className="form-header">Add New Article</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data" className="forms">
                    <label htmlFor="author">Author</label>
                    <br />
                    <input 
                    type="text"
                    placeholder="auther name"
                    className="input-field"
                    onChange={handleAuther}
                    value={aurthorName}
                    />
                    <br />
                    <label htmlFor="title">Title</label>
                    <br />
                    <input 
                    type="text"
                    placeholder="title"
                    className="input-field"
                    onChange={handleTitle}
                    value={title}
                    />
                    <br />
                    <label htmlFor="article">Article</label>
                    <br />
                    <textarea 
                    className="textarea"
                    onChange={handleArticle}
                    value={article}
                    ></textarea>

                    <button type="submit" className="btn-post">Post Article</button>
                </form>
            </div>
        </>
    );
};

export default AddArticle;