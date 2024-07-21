import React, { useEffect, useState } from 'react';
import BlogPostItem from './BlogPostItem';
import { Container, Grid, Pagination } from '@mui/material';
import axios from 'axios';
import '../styles.css';

const BlogPostList = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 6;  // Number of items to display per page
    

    
    const fetchNews = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=keyword&apiKey=13cfba28df844ab7a8fed7f8d8510feb&page=${page}&pageSize=${itemsPerPage}`);
            setPosts(response.data.articles);
            setTotalPages(Math.ceil(response.data.totalResults / itemsPerPage));
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchNews();

    }, [page])

    return (
        <Container>
            <Grid container spacing={3}>
                {posts.map((post, index) => (
                    <BlogPostItem key={index} post={post} />
                ))}
            </Grid>
            <Pagination
                count={totalPages}
                page={page}
                onChange={(e, value) => setPage(value)}
                color="primary"
                className="pagination"
            />
            
        </Container>
        
    );
};

export default BlogPostList;
