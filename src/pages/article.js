//--Displays an individual article--

//Anytime you wanna use react, import React
import React from "react";
import { useParams } from "react-router";
import Data from "../components/data.js"

function Article(){
    //Basically takes this dynamic id (one that changes each time we iterate)
    //Turns the name of the value from the key "id"
    //So if the key = {id} and the value = "article-one", this allows us to see "article-one"
    
    //We can basically create dyanmic variable (id) that changes based on the URL name
    const {id} = useParams(); 
    //Now we've gotta find the data we want and pull it out
    const articleData = Data.find((article) => 
        article.id === id
    );

    return (
        <main> 
            <section className="headerSection"> 
                <div className="headerText"> 
                    <h1>{articleData.title}</h1>
                    <p>{articleData.publishedDate}</p>
                    <p className="headerBlurb">{articleData.blurb}</p>
                </div> 
            </section>
            {/*Figure out how to get this to work*/}
            <section className="articleBody">
                <p>{articleData.articleText.p}</p>
                <h2>{articleData.articleText.p}</h2>
                <p>Some text 2</p>
                <h3>Header 3</h3> 
                <p>Some text 3</p>
            </section> 
        </main>
    ); 
};

export default Article; 
