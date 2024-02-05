import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";
import AppForm from './AppForm';

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);

  const getPosts = async () => {
    const response = await axios.get("https://mock-api-bdg1.onrender.com/data");

    setPosts(response.data);
  };

  const handleCreate = async (post) => {
    console.log("&&&&&&&&&&&& ", currentPost);
    if (currentPost) {

    } else {
      await axios.post("https://mock-api-bdg1.onrender.com/data", post);
    }

    setCurrentPost(null);
    getPosts();
  };

  const handleCancel = () => {
    setCurrentPost(null);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <h1>Posts</h1>
      <AppForm post={currentPost} handleSubmit={handleCreate} handleCancel={handleCancel} />
      {posts.map(post => (
        <div key={post.id}>
          <h2>UserName: {post.username}</h2>
          <h2>Email: {post.email}</h2>
          <button onClick={() => { }}>Edit</button>
          <button onClick={() => { }}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default App
