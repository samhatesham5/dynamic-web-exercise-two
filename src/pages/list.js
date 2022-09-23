//---Displays the list of all articles---

import React from "react"; 
//Going back one directory (we're in pages folder, and get to components then article)
import ArticleCard from "../components/ArticleCard.js";

//Writting a function, list(), that returns HTML (or what looks like it)
function List(){
    return (
        <main>
            <section className="pageWrapper"> 
                <h1>Articles</h1>
                <ArticleCard /> 
            </section> 
        </main> 
    ); 
}

//Exporting List() so that our files can use it
export default List; 