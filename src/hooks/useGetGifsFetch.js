import { useEffect, useState } from "react";
import { getGifsFetch } from "../helpers/getGifsFetch";


export const useGetGifsFetch = ( category ) => {

    const [state, setState] = useState({
        data:[],
        loading:true
    });

    useEffect(() => {
        getGifsFetch(category)
            .then( imgs => {

                setTimeout(() => {
                    
                    setState({
                        data: imgs,
                        loading: false
                    })
                    
                }, 1500);
            })

        
    }, [category])


    return state;
    
}
