// import React, { useEffect, useState } from 'react'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from "../hooks/useFetchGifs"

export default function GifGrid( { category } ) {



    // const [images, setImages] = useState([]);
    const { data: images, loading } = useFetchGifs( category );
    
    
    // useEffect(() => {
    //         getGifs(category)
    //             .then(imgs => setImages( imgs))
    // }, [ category ])



    
    return (
        <>
            <h3>{ category }</h3>

            { loading && <p>LOADING</p> }

            <ol>
            {
                images.map( (img)  => (
                    <GifGridItem 
                        key = { img.id } 
                        //{...img}
                         img = { img }
                    />
                ))

            }
                
            </ol> 
        </>
    )
}
