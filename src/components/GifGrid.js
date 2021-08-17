import React from 'react';
import { useGetGifsFetch } from '../hooks/useGetGifsFetch';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    const {data: gifs, loading} = useGetGifsFetch(category);
    console.log(gifs)

    return (
        <div>
            <h2>{category}</h2>
            {
                loading && <p>loading...</p>
            }

            {
                gifs.map( gif=>(
                    <GifGridItem 
                        key={gif.id}
                        {...gif}
                    />
                ))
            }
            
        </div>
    )
}
