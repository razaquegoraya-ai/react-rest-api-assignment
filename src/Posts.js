import React, { useState, useEffect } from 'react';
import './Posts.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    fetch('https://dummyjson.com/posts')
        .then(response => response.json())
        .then(data => {
            setPosts(data.posts);
            setLoading(false);
        })
        .catch(error => console.error('Error fetching posts:', error));
    }, []);

    if (loading) {
        return <p className="loading-text">Loading posts...</p>;
    }

    return (
        <div className="posts-container">
        <h2>Latest Posts</h2>
        <div className="posts-grid">
        {posts.slice(0, 10).map(post => (
            <div key={post.id} className="post-card">
            <h3>{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</h3>
            <p>
                {post.body.length > 100
                ? post.body.slice(0, 100) + '...'
                : post.body}
            </p>
            </div>
        ))}
        </div>
    </div>
    );
};

export default Posts;
