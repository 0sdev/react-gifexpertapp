import React from 'react'

export const GifGridItem = ( { img } ) => {

    const title = img.title;
    const url = img.url;
    //console.log({...img});
    


    return (
        <div>
            <img src={ url } alt={ title } />
            <p>{ title }</p> 
        </div>
    )
}
