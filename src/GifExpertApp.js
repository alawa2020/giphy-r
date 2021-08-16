import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { getGifsFetch } from './helpers/getGifsFetch';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Naruto','Dragon Ball']);

    getGifsFetch();

    return(
        <>
            <h1>GifExpertApp</h1>
            <hr />
            <AddCategory />
            
            <ol>
                {
                    categories.map( category => (
                        <li key={category}>{category}</li>
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;