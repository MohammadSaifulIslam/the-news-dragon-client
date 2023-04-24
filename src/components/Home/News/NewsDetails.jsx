import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsDetailsCard from '../../Card/NewsDetailsCard';
import EditorInsight from '../../EditorInsight/EditorInsight';

const NewsDetails = () => {
    const newsDetails = useLoaderData();

    return (
        <div>
            <NewsDetailsCard newsDetails={newsDetails}></NewsDetailsCard>
            <EditorInsight></EditorInsight>
        </div>
    );
};

export default NewsDetails;