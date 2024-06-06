import React from 'react';
import PostList from './components/PostList';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';


function App() {
    return (
        <div>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6">
                        Post Viewer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <PostList />
            </Container>
        </div>
    );
}

export default App;