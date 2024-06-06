import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, List, ListItem, ListItemText, CircularProgress } from '@mui/material';
import SearchBar from './SearchBar';

/**
 * PostList component that fetches posts from API and renders a list of posts with a search bar.
 */
const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect hook to fetch the posts from API when the component mounts.
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
           .then(response => {
                setPosts(response.data);
                setFilteredPosts(response.data);
                setLoading(false);
            })
           .catch(error => console.error('Error fetching the posts:', error));
    }, []);

    // Handle search functionality to filter the posts based on the search query. @param {string} query The search query entered by the user
    const handleSearch = (query) => {
        const filtered = posts.filter(post =>
            post.title.toLowerCase().includes(query.toLowerCase()) ||
            post.body.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredPosts(filtered);
    };

    // Render a circular progress indicator while the posts are loading
    if (loading) {
        return <CircularProgress />;
    }

    return (
        <Container>
            <div style={{
                position: 'sticky',
                top: '65px',
                zIndex: 1,
                backgroundColor: '#fff',
                padding: '8px 0',
            }}>
                <SearchBar onSearch={handleSearch} />
            </div>
            <List>
                {filteredPosts.map(post => (
                    <ListItem key={post.id}>
                        <ListItemText primary={post.title} secondary={post.body} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default PostList;