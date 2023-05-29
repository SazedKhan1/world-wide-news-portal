import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../Shared/NewsSummary/NewsSummary';

const Category = () => {
    const newsCategory = useLoaderData();

    return (
        <div>
            <h2>This is Category {newsCategory.length}</h2>
            {
                newsCategory.map(news => <NewsSummary
                    key={newsCategory._id}
                    news={news}
                >

                </NewsSummary>)
            }
        </div>
    );
};

export default Category;