import React, { useEffect, useState } from 'react'

function PostForm({ post: currentPost, handleSubmit, handleCancel }) {
    const [post, setPost] = useState({ username: '', email: '' });

    useEffect(() => {
        if (!currentPost) {
            setPost({ username: '', email: '' });
        }
        else {
            setPost(currentPost);
        };
    }, [currentPost]);

    const onChange = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(post);
            }}>
                <label>Name:</label>
                <input type="text" name="username" value={post.username} onChange={onChange} required />

                <label>Email:</label>
                <input type='email' name="email" value={post.email} onChange={onChange} required />

                <button type='submit'>Submit</button>
                <button type='button' onClick={(e) => {
                    e.preventDefault();
                    handleCancel();
                }}>Cancel</button>
            </form>
        </div >
    )
}

export default PostForm