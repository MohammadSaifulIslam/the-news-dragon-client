import React from 'react';
import CategoryNewsCard from '../Card/CategoryNewsCard';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const allCategoryNews = useLoaderData();
    return (
        <div>
            {
                allCategoryNews.map(news => <CategoryNewsCard
                    key={news._id}
                    news={news}
                ></CategoryNewsCard>)
            }
        </div>
    );
};

export default Home;