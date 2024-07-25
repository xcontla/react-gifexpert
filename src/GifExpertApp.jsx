import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  //const apiKey = '9XomWkMwx57ZBPrFNY9wQZbbmrKUroKR'

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const addNewCategory = (newCategory) => {
    

    if(categories.includes(newCategory)) return;
    setCategories(categories => [newCategory, ...categories]);
  }

  return(
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddNewCategory={addNewCategory}/>

      {
        categories.map((category) => (
            <GifGrid 
              key={category} 
              category={category} />
          ))
      }
    
    </>
  );

}