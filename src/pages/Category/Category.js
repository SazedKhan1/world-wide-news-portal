import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const newsCategory = useLoaderData();

    return (
        <div>
            <h2>This is Category {newsCategory.length}</h2>
        </div>
    );
};

export default Category;