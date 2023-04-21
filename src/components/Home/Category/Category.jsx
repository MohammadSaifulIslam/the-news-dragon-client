import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryNewsCard from '../../Card/CategoryNewsCard';

const Category = () => {
    const categoryNews = useLoaderData();
    console.log(categoryNews)
    return (
        <div>
            {
                categoryNews.map(news => <CategoryNewsCard
                key={news._id}
                news={news}
                ></CategoryNewsCard>)
            }
        </div>
    );
};

export default Category;