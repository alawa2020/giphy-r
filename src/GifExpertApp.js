import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import { useGetGifsFetch } from './hooks/useGetGifsFetch';

const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    return(
        <>
            <h1>GifExpertApp</h1>
            <AddCategory />
            <hr />
            
                {
                    categories.map( category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
        </>
    )
}

export default GifExpertApp;