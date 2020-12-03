import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Articles from './components/Articles';
import AddArticle from './components/AddArticle';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/articles")
      .then(res => setPosts(res.data))
      .catch(error => console.log(error));
  });
  return (
    <> 
        <Header />
        <Navbar />
        <Route exact path="/" render={() => <Articles posts={posts} />} />
        <Route exact path="/add article" component={AddArticle} />
        <Footer />
    </>
  );
}

export default App;
