//---Displays the list of all articles---

import React from "react"; 
//Going back one directory (we're in pages folder, and get to components then article)
import ArticleCard from "../components/ArticleCard.js";
//Importing our JSON data
import Data from "../components/data.js";

//Writting a function, list(), that returns HTML (or what looks like it)
function List(){
    return (
        <main>
            <section className="pageWrapper"> 
                <h1>Articles</h1>
                {/*So we're pulling data from Data but it kinda loops through each object by using Map*/}
                {Data.map((article,i) => (
                        <ArticleCard 
                        //Using article
                        key={i}
                        blurb={article.blurb}
                        date={article.publishedDate}
                        imageAlt={article.image.alt}
                        imageSrc={article.image.url}
                        title={article.title}
                        id={article.id}
                        /> 
                     )
                
                
                )}


            </section> 
        </main> 
    ); 
}

//Exporting List() so that our files can use it
export default List; 