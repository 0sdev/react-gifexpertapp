import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import GifGrid from './Components/GifGrid';

export default function GifExpertApp() {


    const [categories, setCategories] = useState([]);

    console.log(categories);
    return (
        <>
          <h1>GifExpertApp</h1>  
          <AddCategory setCategories={ setCategories } />

          <hr/>
          
          <ol>
          { 
            categories.map( (category,i) => (
                            //<li key={ i } > { category } </li>
                            <GifGrid 
                                key={ i } 
                                category = { category } />
            )) 
          }
          </ol>

        </>
    )
}
